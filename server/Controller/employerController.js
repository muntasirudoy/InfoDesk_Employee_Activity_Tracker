import {employerModel} from '../Models/employerModel.js'



export const  employerControllerGet =(req,res, next)=>{
        employerModel.find({}, (err,docs)=>{
            res.status(200).json(docs)
        })
    };
    
export const employerControllePost =(req,res, next)=>{
        res.send("hello post")
        const createEmployee = new employerModel({
            employerName:req.body.employerName,
            designation:req.body.designation,
            office:req.body.office,
            off:req.body.off,
            phone:req.body.phone,
        })
        createEmployee.save()
    }
    
export const employerControllerPatch =(req,res, next)=>{
        res.send("hello patch")
    }



