const express=require('express');
const bcrypt=require('bcrypt')
const router=express.Router();
const User=require('../models/user')
const coded=require('../utils/UserAuthjson')
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post('/',async(req,res)=>{
    // console.log("login body",req.body)
    const {email,password}=req.body.data
    try{
        let user=await User.findOne({email})
    if(!user){
        res.status(401).send("User is not exist with this email or password");
    }
    const second=await bcrypt.compare(password,user.password)
    const token=coded(user)
    if(second){
        return res.send({status:"success",token});
    }else{
         res.status(401).send("User is not exist with this email or password");
    }
    
    // res.send({
    //     status:"success",
    //     data:req.body
    // })
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
})
module.exports=router