const { productDetails } = require('../models/product');
const express = require('express');
const router = express.Router();
const cloudinary =require('../utils/Cloudinary')
const upload=require('../utils/multer')
router.post('/',upload.single('image'),async(req, res) => {
   
    const {name,reviewCount,rating}=req.body;
     console.log("enter chvhcvqhc fardeen")
    try{
        if (req.file) {
            console.log("image",req.file)
              const buffer = req.file.buffer;
            const dataUri = `data:${req.file.mimetype};base64,${buffer.toString('base64')}`;
    const uploadObj = await cloudinary.uploader.upload(dataUri, { resource_type: 'auto' })
        // const uploadObj=await cloudinary.uploader.upload(req.file);
        const newproduct =new productDetails({
            name,
            reviewCount,
            rating,
            image:uploadObj
        })
        await newproduct.save()
        if(newproduct){
            res.send({
                status:"product made"
            })
        }
    }
    }catch(err){
        res.send("fardeen something went wrong in storing food data");
    }
})
router.get('/',async(req,res)=>{
    const response=await productDetails.find();
    // console.log("get response",response)
    res.send(response)
})
router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    const result=await productDetails.deleteOne({_id:id});
    console.log("backend result",result);
    if(result.acknowledged){
        res.send({status:"success"})
    }else{
        res.send({status:"fail"})
    }
    // res.send(result)
})
module.exports=router;