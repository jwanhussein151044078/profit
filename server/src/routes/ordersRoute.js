const express = require('express');
const { getOrdersList, getOrdersListTotalCount } = require('../controllers/orderController');
const ordersRoute = express.Router();

ordersRoute.route('/').get(getOrdersList);
ordersRoute.route('/total').get(getOrdersListTotalCount);

module.exports = ordersRoute;