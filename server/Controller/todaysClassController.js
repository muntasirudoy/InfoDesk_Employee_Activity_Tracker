import { todaysClassModel } from "../Models/todaysClassModel.js";



export const  todaysClassControllerGet =(req,res, next)=>{
    todaysClassModel.find({}, (err,docs)=>{
            res.status(200).json(docs)
        })
      
    };
    
export const todaysClassControllerPost =(req,res, next)=>{
        res.send("hello post")
        const createClass = new todaysClassModel({
            batch:req.body.batch,
            time:req.body.time,
            room:req.body.room,
        })
        createClass.save()
    }
    
export const todaysClassControllerPatch =(req,res, next)=>{
        res.send("hello patch")
    }

