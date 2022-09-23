const  userController  = require('../controller/userController');

 const userRouter = require('express').Router();

userRouter.get('',userController.getAll)
module.exports = userRouter