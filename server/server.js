
import express  from "express"
import bodyParser from "body-parser"
import { dbConnection } from "./Config/db.js"
import employerRouter from "./Routes/employerRoutes.js"
import todaysClassRouter from "./Routes/todaysClassRouter.js"
import postActivityRouter from "./Routes/postActivityRoutes.js"
import cors from "cors"
import 'dotenv/config'
import userRouter from "./Routes/userRoutes.js"
dbConnection()
const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/employer', employerRouter)
app.use('/todaysclass', todaysClassRouter)
app.use('/postactivity', postActivityRouter)
app.use('/', userRouter)



app.listen(8000,()=>{
    console.log("Server Connected")
})