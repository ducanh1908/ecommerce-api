const  userController  = require('../controller/userController');
const  verifyToken = require('../controller/verifyToken')
const verifyTokenAndAuthorization = require('../controller/verifyToken')
 const userRouter = require('express').Router();

userRouter.put('/:id',verifyTokenAndAuthorization,userController.updateUser);


module.exports = userRouter;