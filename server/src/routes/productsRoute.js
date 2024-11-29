const express = require('express');
const { getProductssList, getProductsListTotalCount } = require('../controllers/productsController');
const productsRoute = express.Router();

productsRoute.route('/').get(getProductssList);
productsRoute.route('/total').get(getProductsListTotalCount);

module.exports = productsRoute;