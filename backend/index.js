import express from 'express'
import dontenv from 'dotenv'
dontenv.config()
import products  from './data/products.js'
import connectDB from './config/db.js'
import asyncHandler from "express-async-handler";
import productRoutes from './routes/productRoutes.js'//this will be used as a middleware

const app = express()
const port = process.env.PORT

connectDB()

//middlewares
app.use('/api/products',productRoutes)//for any path that starts with api-products

app.get('/',asyncHandler((req,res)=>{
    res.send('API running')
}))

app.listen(port,()=>{
    console.log(`app listening http://localhost:${port}/`)
})
