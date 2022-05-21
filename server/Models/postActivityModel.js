import mongoose from "mongoose";

const Schema = mongoose.Schema

const postActivitySchema = new Schema ({
  userId: {   
    type : String,
    required:true
  },
   activityName: {   
     type:String,
     required:true
   },
    hours: {   
      type:String,
      required:true
     },
    activityDetails: {   
      type:String,
      required:true
     },
  
})

 export const postActivityModel  = mongoose.model('postActivity', postActivitySchema)