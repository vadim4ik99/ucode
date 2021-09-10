import User from "../../models/user.js"
import bcrypt from 'bcryptjs'
import isEmail from 'isemail'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({path: './server/.env'})

const signToken=  id =>{

  return jwt.sign({id},   process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_SECRET_IN
  });

}

const createAndSendToken= (user, statusCode, res, redirect) =>{
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
    redirect,
    token,
    data: {
      user
    }
  })

}


export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    req.session.error = "User already exists";
    return res.redirect("/register");
  }

  const hasdPsw = await bcrypt.hash(password, 12);

  user = new User({
    username,
    email,
    password: hasdPsw,
    data: {
      clicks: 0
    }
  });

  await user.save();
  createAndSendToken(user, 200, res, "/login")

};





export const login = async (req, res) => {
  const { username, password } = req.body;

  let user 
  // if (isEmail.validate(username) == true) user = await User.findOne({ email: username });
  // else 
  user = await User.findOne({username})

  if (!user) {
    // req.session.error = "Invalid Credentials";
    return res.send({redirect: "/login"});
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    // req.session.error = "Invalid Credentials";
    return res.send({redirect: "/login"});
  }




  // req.session.isAuth = true;
  // req.session.username = user.username;
  createAndSendToken(user, 200, res, "/profile")
};





export const logout  = (req, res) => {
  
  const cookieOptions= {
    expires: new Date(Date.now()+1000),
    httpOnly: true
  }
  const token = req.cookies.jwt
  res.clearCookie('jwt')
  res.send({redirect: "/login"});
};