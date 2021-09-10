import User from "../../models/user.js"
import bcrypt from 'bcryptjs'
import isEmail from 'isemail'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import {createAndSendToken} from '../../utils/jwt.js'

dotenv.config({path: './server/.env'})


export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  //check if user exists
  let user = await User.findOne({ username });
  if (user) {
    return res.redirect("/register");
  }

  //create user
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

  createAndSendToken(user, 200, res, {redirect: "/login"})
};


export const login = async (req, res) => {
  const { username, password } = req.body;

  //find user
  let user 
  if (isEmail.validate(username, {errorLevel: false}) == true) user = await User.findOne({ email: username });
  else user = await User.findOne({username})
  if (!user) {
    return res.send({redirect: "/login"});
  }

  //check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send({redirect: "/login"});
  }

  createAndSendToken(user, 200, res, {redirect: "/profile"})
};


export const logout  = (req, res) => {
  res.clearCookie('jwt')
  res.send({redirect: "/login"});
};