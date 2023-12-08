require('dotenv').config();
const mongoose=require("mongoose");
const MONGO_URL=process.env.MONGO_URL;
const connect=()=>{

    mongoose.connect(MONGO_URL)
    .then(()=>console.log("successfully connected"))
    .catch((error)=>console.log(error))
}
connect();
module.exports=connect;