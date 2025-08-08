require("dotenv").config()
const express=require('express')
const mongoose=require('mongoose');
const auth=require('./routes/Auth')
const cors=require('cors')
const app=express();
const login=require('./routes/login')

const productRouter=require('./routes/product')
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.send("hello first");
})

const  url=process.env.DB_URI;
const PORT=process.env.PORT
mongoose.connect(url).then(()=>{
    console.log("mongoose connect")
    app.use("/api/product",productRouter)
    app.use("/api/user",auth)
    app.use("/api/login",login)
    app.listen(5000)
}).catch((err)=>{
    console.log("error there in db connection",err)
})