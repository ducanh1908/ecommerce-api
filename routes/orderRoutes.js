const  orderController  = require('../controller/orderController');
const verifyToken = require('../controller/verifyToken')
const verifyTokenAndAdmin = require('../controller/verifyToken')

const verifyTokenAndAuthorization = require('../controller/verifyToken')
const orderRoute = require('express').Router();

 orderRoute.post('/',verifyToken,orderController.createOrder);
 orderRoute.put('/:id',verifyTokenAndAdmin,orderController.updateOrder);
 orderRoute.delete('/:id',verifyTokenAndAdmin,orderController.deleteOrder);
orderRoute.get('/find/:userId',verifyTokenAndAuthorization, orderController.getOrder);
orderRoute.get('',verifyTokenAndAdmin,orderController.getAll);
orderRoute.get('/income',verifyTokenAndAdmin,orderController.getIncome);



module.exports = orderRoute