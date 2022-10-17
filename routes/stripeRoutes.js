const stripeController = require('../controller/stripeController');

 const stripeRoute = require('express').Router();

stripeRoute.post('',stripeController.checkoutPayment)


module.exports = stripeRoute