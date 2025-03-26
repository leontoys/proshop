import express from 'express'

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
router.get('/',getUsers)

//login
router.post('/login',authUser)

//profile
router.get('/profile',getUserProfile)

//update
router.put('/profile',updateUserProfile)

//get user
router.get('/:id',getUserById)

//delete user
router.delete('/:id',deleteUser)

router.put('/:id',updateUser)

export default router