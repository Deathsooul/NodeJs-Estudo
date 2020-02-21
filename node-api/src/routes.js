const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');

routes.get('/products', productController.index);

module.exports = routes;