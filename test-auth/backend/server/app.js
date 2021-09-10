import express from 'express'
import session from 'express-session'

import cors from 'cors'
import helmet from 'helmet';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import router from './routes/router.js'
import connectDB from './configs/mongo.js';

import mongoDBSessionFunc from 'connect-mongodb-session'
dotenv.config({path: './server/.env'})

process.setMaxListeners(0)

connectDB()
const MongoDBSession = mongoDBSessionFunc(session)
const sessionsStore = new MongoDBSession({
    uri: process.env.DATABASE,
    collection: 'sessions'
})


const port = process.env.PORT || 5000

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(helmet())

app.use(session({
    secret: '12345678',
    resave: false,
    saveUninitialized: false,
    store: sessionsStore
}))
app.use('/', router)
app.get('/', (req,res) => res.send('123'))
app.listen(port, () => console.log(`Listening on port ${port}`))


