import expressAsyncHandler from "express-async-handler";
import User from '../models/userModel.js'

const registerUser = expressAsyncHandler(async(req,res)=>{
    res.send('register user')
})

const getUsers = expressAsyncHandler(async(req,res)=>{
    res.send('get users')
})

const authUser = expressAsyncHandler(async(req,res)=>{
    res.send('auth user')
})

const getUserProfile = expressAsyncHandler(async(req,res)=>{
    res.send('get user profile')
})

const updateUserProfile = expressAsyncHandler(async(req,res)=>{
    res.send('update user profile')
})

const getUserById = expressAsyncHandler(async(req,res)=>{
    res.send('get user by id')
})

const deleteUser = expressAsyncHandler(async(req,res)=>{
    res.send('delete user')
})

const updateUser = expressAsyncHandler(async(req,res)=>{
    res.send('update user')
})

export {

    registerUser,
    getUsers,
    authUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    deleteUser,
    updateUser
}
