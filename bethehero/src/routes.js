const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

/**  Métodos HTTP:
 GET: Busca de informaçoes do back-end
 POST: Criar uma informação no back-end
 PUT:Alterar uma informação no back-end
 DELETE: Deletar alguma informação no back-end
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parametros enviado por rota url apos o simobolo de ? (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Rquest Body:  Corpo da requeisição, usado para criar ou alterar recursos
 * 
 */

/**
 * Banco de Dados
 * 
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 *  - Comunicação com o banco de dados
 *      Driver: SELECY * FROM users
 *      Qeury Builder: table('users').select('*').where()
 */


routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
});

routes.post('/ongs', async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    // Criação do ID da ONG
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return res.json({ id });
});

module.exports = routes;