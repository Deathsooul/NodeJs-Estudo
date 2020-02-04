const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Fila da Puta');
});

app.listen(3001);