const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o app
const app = express();
app.use(express.json());

//Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir("./src/models");

// Rota
app.use('/api', require("./src/routes"));

app.listen(3001);