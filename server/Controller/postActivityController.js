import { postActivityModel } from "../Models/postActivityModel.js";


export const  postActivityControllerGet =(req,res, next)=>{
    postActivityModel.find({userId:req.headers.userid}, (err,docs)=>{
            res.status(200).json(docs)
        })
    };
    


export const postActivityControllePost = (req,res, next)=>{
        const createPost = new postActivityModel({
            userId:req.body.userId,
            activityName:req.body.activityName,
            hours:req.body.hours,
            activityDetails:req.body.activityDetails,
        })
        createPost.save()
    }
    

export const  postActivityControllerDelete =(req,res, next)=>{
        postActivityModel.findByIdAndDelete({_id: req.headers.id}, (err,docs)=>{
                res.status(200).json(docs)
            })
        };

export const  postActivityControllerPut =(req,res, next)=>{
  
     const updataData = {
         activityName: req.body.activityName,
         activityDetails: req.body.activityDetails,
         hours: req.body.hours
     }

     postActivityModel.findByIdAndUpdate({_id: req.body.id}, updataData, (err,docs)=>{
            res.status(200).json(docs)
        })
};

export const  postActivityControllerSingle =(req,res, next)=>{

    postActivityModel.findById({_id:req.params.id},(err,docs)=>{
           res.status(200).json(docs)
           console.log(docs)
       })
};