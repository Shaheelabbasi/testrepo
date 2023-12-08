const jwt=require('jsonwebtoken')
const SecretKey=process.env.JWT_SECRET
const JwtAuth=(req,res,next)=>{
const token=req.header('Authorization')

jwt.verify(token,SecretKey,(error,decoded)=>{

    if(error)
    {
        console.log("Token verification failed",error.message)
    }
    else
    {
        console.log("Successfully verified token")
        next();
    }
})


}


module.exports=JwtAuth