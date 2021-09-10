import jwt from 'jsonwebtoken'
import {promisify} from 'util'

export const signToken=  id =>{

    return jwt.sign({id},   process.env.JWT_SECRET,{
      expiresIn: process.env.JWT_SECRET_IN
    });
  
  }
  
 export  const createAndSendToken= (user, statusCode, res, payload) =>{
    const token= signToken(user._id);
    const cookieOptions= {
      expires: new Date(Date.now()+process.env.JWT_COOKIES_EXPIRES_IN*24*3600*1000),
      httpOnly: true
    }
  
    if(process.env.NODE_ENV=== 'production') cookieOptions.secure=true
  
    res.cookie('jwt', token, cookieOptions);
  
    user.password=undefined;
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      },
      ...payload
    })
  
  }

  export async function jwtParser(req, res, next) {
    let token
    if(req.cookies.jwt) {
      token= req.cookies.jwt
    }
    if(!token){
      res.send('cookies doesnt contain token')
    }
    req.decoded=await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    next()
  }