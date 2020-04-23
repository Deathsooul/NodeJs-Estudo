const express = require("express");

const app = express();

app.use(express.json());

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

app.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({
        evento: 'SemanaOmniStack 11',
        aluno: 'Wallace Picao'
    });
});

app.listen(3333);
