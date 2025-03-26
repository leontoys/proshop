import express from 'express'
import {getSingleProduct,getAllProducts} from '../controllers/productController.js'

const router = express.Router()
//all api paths to be copied over from index.js to here

router.get('/',getAllProducts)//.get(getProducts)

router.get('/:id',getSingleProduct)

export default router