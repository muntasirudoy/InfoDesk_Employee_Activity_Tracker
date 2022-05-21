import { Router } from "express";
import { 
    postActivityControllePost,
    postActivityControllerGet,
    postActivityControllerDelete,
    postActivityControllerPut,
    postActivityControllerSingle,
 } from "../Controller/postActivityController.js";

const postActivityRouter = Router()

// get
postActivityRouter.get('/', postActivityControllerGet)

// single 
postActivityRouter.get('/:id', postActivityControllerSingle)

// post
postActivityRouter.post('/', postActivityControllePost )

// delete
postActivityRouter.delete('/', postActivityControllerDelete )

//update
postActivityRouter.put('/', postActivityControllerPut )


export default postActivityRouter