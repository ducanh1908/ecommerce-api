const router = require('express').Router();
const  userRouter = require('./userRoutes') ;
const authRoute = require('./authRoutes')
const productRoute = require('./productRoutes');
const orderRoute = require('./orderRoutes');
const stripeRoute  = require('./stripeRoutes')
router.use('/users', userRouter)
router.use('/auth',authRoute )
router.use('/products', productRoute)
router.use('/orders', orderRoute)
router.use('/payment', stripeRoute)
module.exports = router