import { validationResult } from "express-validator";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from '../models/user.model.js';

const signUp = (req,res)=>{    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({status: 422, message:"No errors",errors: errors.array()})
    }
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;    
    // console.log(req.body);
    const salt = parseInt(process.env.SALT_ROUNDS);
    // console.log(salt,"salt");
    // console.log(password,"password");
    bcrypt.hash(password, salt)
    .then((hashedPassword)=>{        
        const user = new User({
            username: username,
            email:email,
            password:hashedPassword,         
        });
        user.save();
    }).then((result)=>{        
        return res.status(200).json({message:"Sucess OK!!!"});
    }).catch((err)=>{
        console.log(err);
    });
}


const signIn = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;    
    let currentUser;
    User.findOne({username:username})
    .then((user)=>{
        if(!user){
            // res.sendStatus(401);
            res.send({status:401,message:"User Not Found"});
        }else{
            currentUser = user;
            return bcrypt.compare(password,user.password);
        }
    }).then((result)=>{
        if(!result){
            res.send({status:401,message:"Password doesnt match"});
        }
        const token = jwt.sign({
            username:currentUser.username,
            userID:currentUser._id.toString()}
            ,process.env.MY_SECRET_KEY,{expiresIn:'18000s'});
        res.send({status:200,message:"Success! OK for login",token:token,username:currentUser.username,email:currentUser.email})
    });
}


export{signUp,signIn};