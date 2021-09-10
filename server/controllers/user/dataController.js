import User from "../../models/user.js"
import {promisify} from 'util'
import jwt from 'jsonwebtoken'

export async function getUserData(req, res, next) {
  //get and decode jsonwebtoken
    let token
    if(req.cookies.jwt) {
      token= req.cookies.jwt
    }
    if(!token){
      res.send()
    }
    const decoded=await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser= await User.findById(decoded.id);
    res.send(currentUser)
  };

export async function setUserData(req, res) {
  let token
    if(req.cookies.jwt) {
      token= req.cookies.jwt
    }
    if(!token){
      res.send()
    }
    const decoded=await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    const data = req.body
    User.updateOne({_id: decoded.id}, {
        $set: { data }
    }).then(async ()=> console.log(await User.findById(decoded.id)))
    res.send()
}

  export async function getAllUsers (req, res) {
    try {
      const users = await User.find();
      res
        .status(201)
        .json({ status: "Success", message: "All users are", users });
    } catch (error) {
      res.status(400).json({ status: "False", message: error.message });
    }
  };