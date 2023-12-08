


const Getproducts=(req,res)=>{
    res.status(200).json({message:"this is the producst list,protected route got access"});
}


module.exports={
    Getproducts,
}