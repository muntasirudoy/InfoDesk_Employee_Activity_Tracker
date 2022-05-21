import { Router } from "express";
import { userModel } from "../Models/userModel.js";

const userRouter = Router()


userRouter.post('/signup', (req,res)=>{
   const createUser = new userModel({
       username : req.body.username,
       email : req.body.email,
       password : req.body.password,
   })
   createUser.save()
})

userRouter.post('/login', async(req,res)=>{

      const user = await userModel.findOne({email:req.body.email})

      if(user){
        if(user.password == req.body.password){
            res.status(200).json({
                id:user._id,
                username: user.username,
                email:user.email
            })
            
        }
        else{
            res.send("Wrong password")
        }
    }
    else{
        res.send("Invalid user")
    }


 })


export default userRouter