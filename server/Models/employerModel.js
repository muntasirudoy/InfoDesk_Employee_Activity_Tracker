import mongoose from "mongoose";

const Schema = mongoose.Schema

const emplyerSchema = new Schema ({
   employerName: {   
    type:String,
    required:true
   },
   designation: {   
      type:String,
      required:true
     },
     office: {   
      type:String,
      required:true
     },
     off: {   
      type:String,
      required:true
     },
     phone: {   
      type:Number,
      required:true
     },
  
})

 export const employerModel  = mongoose.model('employer', emplyerSchema )