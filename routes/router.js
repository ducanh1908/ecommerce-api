const router = require('express').Router();
const  userRouter = require('./userRoutes') ;
const authRoute = require('./authRoutes')
const productRoute = require('./productRoutes');
const orderRoute = require('./orderRoutes');
router.use('/users', userRouter)
router.use('/auth',authRoute )
router.use('/products', productRoute)
router.use('/orders', orderRoute)
module.exports = router