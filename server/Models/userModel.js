import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema ({
   username: {   
    type:String,
    required:true
   },
   email: {   
    type:String,
    required:true
   },
    password: {   
      type:Number,
      required:true
     },
  
})

 export const userModel  = mongoose.model('user', userSchema )