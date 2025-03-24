import express from 'express'
import dontenv from 'dotenv'
dontenv.config()
import products  from './data/products.js'
import connectDB from './config/db.js'

const app = express()
const port = process.env.PORT

connectDB()

app.get('/',(req,res)=>{
    res.send('API running')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params
    const proudct = products.find(proudct => proudct._id = id)
    res.json(proudct)
})

app.listen(port,()=>{
    console.log(`app listening http://localhost:${port}/`)
})
