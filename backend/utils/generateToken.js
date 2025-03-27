import jwt from "jsonwebtoken";

const generateToken = async (res,userId) => {
    //create token
    const token = jwt.sign({userId},process.env.SECRET,{
        expiresIn : '1hr'
    })
    //respond with cookie
    res.cookie('jwt',token,{
        httpOnly : true,
        secure : process.env.NODE_ENV !== 'development',
        sameSite : 'strict',
        maxAge : 60*60*1000
    })
}

export default generateToken