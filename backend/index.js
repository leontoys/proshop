import express from 'express'
import dontenv from 'dotenv'
dontenv.config()
import products  from './data/products.js'
import connectDB from './config/db.js'
import asyncHandler from "express-async-handler";
import productRoutes from './routes/productRoutes.js'//this will be used as a middleware
import userRoutes from './routes/userRoutes.js'//this will be used as a middleware
import {notFound,errorHandler} from './middleware/errorHandler.js'

const app = express()
const port = process.env.PORT

connectDB()

//server frontned
app.use(express.static('dist'))
//middlewares
app.use('/api/products',productRoutes)//for any path that starts with api-products
app.use('/api/users',userRoutes)

app.get('/',asyncHandler((req,res)=>{
    res.send('API running')
}))

//this should be at the last
app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app listening http://localhost:${port}/`)
})
