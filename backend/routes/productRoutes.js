import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()
//all api paths to be copied over from index.js to here

router.get('/',asyncHandler(async (req,res)=>{
    const products = await Product.find({})//get from backend
    if(products){
        return res.json(products)
    }
    //error
    res.status(404)
    throw new Error('Resource not found');
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const {id} = req.params
    //const proudct = products.find(proudct => proudct._id = id) - this was to get from the file
    const product = await Product.findById(id)
    if(product){
        return res.json(product)
    }
    //error
    res.status(404)
    throw new Error('Resource not found');
}))

export default router