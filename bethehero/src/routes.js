const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

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

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
// routes.post('/ongs', OngController.create);


/**
 * Query
 * Route
 * Body    
 */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);


routes.post('/incidents', IncidentController.create);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes;