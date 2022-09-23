const  authController  = require('../controller/authController');

 const authRoute = require('express').Router();

authRoute.post('/register',authController.register)
authRoute.post('/login',authController.login)

module.exports = authRoute