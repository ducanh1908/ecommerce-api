const  productController  = require('../controller/productController');
const verifyTokenAndAdmin = require('../controller/verifyToken')
const productRoute = require('express').Router();

 productRoute.post('',verifyTokenAndAdmin, productController.createProduct);
 productRoute.put('/:id',verifyTokenAndAdmin,productController.updateProduct);
 productRoute.delete('/:id',verifyTokenAndAdmin,productController.deleteProduct);
productRoute.get('/:id', productController.getProduct);
productRoute.get('',productController.getAll);


module.exports = productRoute