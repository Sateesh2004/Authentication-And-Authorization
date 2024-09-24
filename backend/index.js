import express from 'express'
import dotenv from "dotenv"
import connect from './config/connectdb.js'
import userRoutes from "./routes/userRoute.js"
import cors from "cors"
import cookieParser from 'cookie-parser'
dotenv.config({path:'.env.local'})
const app = express()
app.use(cookieParser()); 
const port = process.env.PORT
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}
));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello orld")
})
app.use("/auth",userRoutes)

app.listen(port,()=>{
    connect()
    console.log(`http://localhost:${port}`)
})