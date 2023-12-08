require('dotenv').config();
// const { configDotenv } = require("dotenv");
const express=require("express");
const app=express();
const port=process.env.PORT;
const connect=require("./DB/connect")
const registerRoute=require('./Routes/register')
const loginRoute=require('./Routes/login')
const productRoute=require("./Routes/products")
const forgotpassword=require("./Routes/forgotpassword")
const JwtAuth=require('./Middlewares/verify')
connect();
app.use(express.json());



app.use("/register",registerRoute)
app.use("/login",loginRoute)
app.use("/products",JwtAuth,productRoute)
app.use("/forgotpassword",forgotpassword);

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
    
})
