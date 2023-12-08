const Usermodel=require("../Models/usemodel")
const jwt=require('jsonwebtoken');
const SecretKey=process.env.JWT_SECRET
const Handlelogin=async (req,res)=>{
    const{email,password}=req.body
    try {
     const CheckUser= await Usermodel.findOne({email:email})
     if(!CheckUser)
     {
        res.json("User not found");
     }
     console.log(CheckUser.password)
     if(CheckUser.password === password)
     {
        const token=jwt.sign({id:CheckUser.id,name:CheckUser.name},SecretKey,{expiresIn:"1h"})
        res.status(200).json({message:"Logged in successfully",token})

     }
     else
     {
        res.json("Incorrect password")
     }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    Handlelogin,
}
