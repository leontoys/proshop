import express from 'express'
import {getProduct,getProducts} from '../controllers/productController.js'

const router = express.Router()
//all api paths to be copied over from index.js to here

router.get('/',getProducts)//.get(getProducts)

router.get('/:id',getProduct)

export default router