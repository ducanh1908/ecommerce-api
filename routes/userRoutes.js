const  userController  = require('../controller/userController');
const verifyTokenAndAuthorization = require('../controller/verifyToken')
 const userRouter = require('express').Router();

userRouter.put('/users/:id',verifyTokenAndAuthorization,userController.updateUser);


module.exports = userRouter;