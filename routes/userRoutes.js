const  userController  = require('../controller/userController');
const  verifyToken = require('../controller/verifyToken')
const  verifyTokenAndAdmin = require('../controller/verifyToken')
const verifyTokenAndAuthorization = require('../controller/verifyToken')
 const userRouter = require('express').Router();

userRouter.put('/:id',verifyTokenAndAuthorization,userController.updateUser);
userRouter.delete('/:id', verifyTokenAndAuthorization, userController.deleteUser)
userRouter.get('/find/:id', verifyTokenAndAdmin, userController.getUser)
userRouter.get('/',verifyTokenAndAdmin,userController.getAll)
userRouter.get('/stats', verifyTokenAndAdmin, userController.getStats)
module.exports = userRouter;