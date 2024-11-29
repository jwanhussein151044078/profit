const express = require('express');
const { getProductssList, getProductsListTotalCount, getAttributesByDetailsId } = require('../controllers/productsController');
const productsRoute = express.Router();

productsRoute.route('/').get(getProductssList);
productsRoute.route('/total').get(getProductsListTotalCount);
productsRoute.route('/attributes/:detail_id').get(getAttributesByDetailsId);


module.exports = productsRoute;