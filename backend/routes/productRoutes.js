import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()
//all api paths to be copied over from index.js to here

router.get('/',asyncHandler(async (req,res)=>{
    const products = await Product.find({})//get from backend
    products
    ? res.json(products)
    : res.status(404).json({message:'No products found'})
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const {id} = req.params
    //const proudct = products.find(proudct => proudct._id = id) - this was to get from the file
    const product = await Product.findById(id)
    product
    ? res.json(product)
    : res.status(404).json({message:'Product not found'})
}))

export default router