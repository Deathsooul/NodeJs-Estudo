const express = require('express');

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


routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({
        evento: 'SemanaOmniStack 11',
        aluno: 'Wallace Picao'
    });
});


module.exports = routes;