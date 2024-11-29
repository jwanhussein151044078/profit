const express = require('express');
const { calcProfit } = require('../controllers/profitController');
const profitRoute = express.Router();

profitRoute.route('/calc').get(calcProfit);

module.exports = profitRoute;