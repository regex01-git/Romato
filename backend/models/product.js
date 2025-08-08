const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    reviewCount:{type:Number,required:true},
    image:{type:Object,required:true},
    rating:{type:Number,required:true}
})
const productDetails=mongoose.model("productDetails",productSchema);
exports.productDetails=productDetails;