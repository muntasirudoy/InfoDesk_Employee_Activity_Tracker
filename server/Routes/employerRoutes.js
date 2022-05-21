import { Router } from "express";
import { 
    employerControllePost,
    employerControllerGet,
    employerControllerPatch
 } from "../Controller/employerController.js";

const employerRouter = Router()

//employer get
employerRouter.get('/', employerControllerGet)

//emplyer post
employerRouter.post('/',employerControllePost )

//emplyer update
employerRouter.patch('/', employerControllerPatch)

export default employerRouter