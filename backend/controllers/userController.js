import expressAsyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import generateToken from "../utils/generateToken.js";

//---/api/users/auth
//login
const authUser = expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body

    //check if this user exists in db
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){

        generateToken(res,user._id)

        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//create user
const registerUser = expressAsyncHandler(async(req,res)=>{
    console.log('register user')
    const {name,email,password} = req.body

    //check if user exists
    const userexists = await User.findOne({email})

    if(userexists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = User.create({
        name,
        email,
        password //this will be hashed in the User model
    })

    if(!user){
        res.status(400)
        throw new Error ('Incorrect user data')
    }

    //generate token
    generateToken(res,user._id)
    console.log("generated token for user")
    res.status(200).json(
        {
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin
        }
    )
})

//logout
const logoutUser = expressAsyncHandler(async (req,res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:'User logged out'})
})

const getUsers = expressAsyncHandler(async(req,res)=>{
    res.send('get users')
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
    logoutUser,
    registerUser,
    getUsers,
    authUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    deleteUser,
    updateUser
}
