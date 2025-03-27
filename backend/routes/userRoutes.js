import express from 'express'
import { admin,protect } from '../middleware/authMiddleware.js'

import {
    registerUser,
    getUsers,
    authUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    deleteUser,
    updateUser

} from '../controllers/userController.js'


const router = express.Router()

//create new user
router.post('/',registerUser)

//get all users
//only admin should get all users info
router.get('/',protect,admin,getUsers)

//login
router.post('/auth',authUser)

//profile
//only for authorised user
router.get('/profile',protect,getUserProfile)

//update
//only authorised user
router.put('/profile',protect,updateUserProfile)

//get user
//only for admin
router.get('/:id',protect,admin,getUserById)

//delete user
router.delete('/:id',protect,admin,deleteUser)

router.put('/:id',protect,admin,updateUser)

export default router