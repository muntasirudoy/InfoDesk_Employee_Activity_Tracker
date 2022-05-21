import mongoose from "mongoose";

const Schema = mongoose.Schema

const todaysClassSchema = new Schema ({
   batch: {   
    type:String,
    required:true
   },
   time: {   
      type:String,
      required:true
     },
     room: {   
      type:String,
      required:true
     },
  
})

 export const todaysClassModel  = mongoose.model('todaysClass', todaysClassSchema )