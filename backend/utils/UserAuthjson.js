const jwt=require('jsonwebtoken')
const coded=(data)=>{
    const decoded=jwt.sign({
        id:data._id,
        name:data.name,
        isAdmin:data.isAdmin
    },process.env.JWT_KEY)
    return decoded;
}
module.exports=coded;