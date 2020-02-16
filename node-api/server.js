const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o app
const app = express();

//Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir("./src/models");

const Product = mongoose.model('Product');

// Rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build Native app with React',
        url: 'http://github.com/facebook/react-native'
    });
    return res.send('Eai Fila da Puta');
});

app.listen(3001);