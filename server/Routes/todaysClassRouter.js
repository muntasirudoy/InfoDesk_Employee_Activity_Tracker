import { Router } from "express";
import { 
    todaysClassControllerGet,
    todaysClassControllerPost,
    todaysClassControllerPatch
 } from "../Controller/todaysClassController.js";

const todaysClassRouter = Router()

//employer get
todaysClassRouter.get('/', todaysClassControllerGet)

//emplyer post
todaysClassRouter.post('/',todaysClassControllerPost )

//emplyer update
todaysClassRouter.patch('/', todaysClassControllerPatch)

export default todaysClassRouter