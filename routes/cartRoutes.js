const  cartController  = require('../controller/cartController');
const verifyToken = require('../controller/verifyToken')
const verifyTokenAndAdmin = require('../controller/verifyToken')

const verifyTokenAndAuthorization = require('../controller/verifyToken')

const cartRoute = require('express').Router();

 cartRoute.post('',verifyToken, cartController.createCart);
 cartRoute.put('/:id',verifyTokenAndAuthorization,cartController.updateCart);
 cartRoute.delete('/:id',verifyTokenAndAuthorization,cartController.deleteCart);
cartRoute.get('/find/:userId',verifyTokenAndAuthorization, cartController.getCart);
cartRoute.get('',verifyTokenAndAdmin,cartController.getAll);


module.exports = cartRoute