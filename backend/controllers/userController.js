import expressAsyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

//---/api/users/auth
const authUser = expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body

    //check if this user exists in db
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        //create token
        const token = jwt.sign({
            userId : user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn : '30d'
        }
    )

    //HTTP Only cookie
        res.cookie('jwt',token,{
            httpOnly : true,
            secure : process.env.NODE_ENV !== 'development',//secure cookies in production
            sameSite : "strict",
            maxAge : 30 * 24 * 60 * 60 * 1000//30 days in ms
        })

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

const registerUser = expressAsyncHandler(async(req,res)=>{
    res.send('register user')
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

    registerUser,
    getUsers,
    authUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    deleteUser,
    updateUser
}
