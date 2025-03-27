import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asynchandler from 'express-async-handler'

const protect = asynchandler(async(req,res,next)=>{
    
    //check the token from the request header
    let token 
    
    token = req?.cookies?.jwt

    console.log("cookie?",req?.cookies)
    console.log("token",req?.cookies?.token)

    if(!token){
        res.status(401)
        throw new Error('Not authorised no token')
    }

    try {
        
        //decode token
        const decoded = jwt.verify(token,process.env.SECRET)

        //get user - except password
        const user = User.findById(decoded.userId).select('-password')

        next()

    } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorised token failed')
    }

})

const admin = asynchandler(async(req,res,next)=>{
    
    //check if user is admin
    if(req.user && req.user.isAdmin){
        //success - move to next
        next()
    }
    else{
        res.status(401)
        throw new Error('Not authorised not admin')
    }

})

export {protect,admin}