import express from 'express'
import dotenv from 'dotenv'

import loginRouter from './userRoutes/loginRouter.js'
import userDataRouter from './userRoutes/userDataRouter.js'

const router = express.Router()


router.use(express.json());
router.use(express.urlencoded({extended: true}))



router.use("/users", loginRouter);
router.use('/users', userDataRouter)

router.get('/', (req, res) => {

    res.send('root path')
})






export default router