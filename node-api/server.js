const express = require('express');
const mongoose = require('mongoose');

// Inicia o app
const app = express();

//Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Rota
app.get('/', (req, res) => {
    res.send('Eai Fila da Puta');
});

app.listen(3001);