const express=require('express');
const bcrypt=require('bcrypt')
const router=express.Router();
const User=require('../models/user')
const coded=require('../utils/UserAuthjson')

router.post('/',async(req,res)=>{
    // console.log("hello fellow",req.body)
    try{
        const {name,email,password}=req.body;
        const exist=await User.findOne({email:email});
        if(exist){
            console.log("user exist")
           return res.status(409).send({status:"fail",data:"User with email already exist"});
        }
        const hashPass=await bcrypt.hash(password,10);
        let user=User({
            name,email,password:hashPass
        })
     
    user=await user.save()
            const token=coded(user)
    if(user){
        res.send({
            status:"success",
            data:token
        })
    }
    }catch(err){
        res.send({
            status:"fail"
        })
    }
    

   
})

module.exports=router;