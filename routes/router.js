const  userRouter = require('./userRoutes') ;
const authRoute = require('./authRoutes')
 const router = require('express').Router();

router.use('/users', userRouter)
router.use('/auth',authRoute )
module.exports = router