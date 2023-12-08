const express=require('express')
const Router=express.Router();

const{HandleForgetPassword}=require("../Controllers/forgotpassword")


Router.post("/",HandleForgetPassword);

module.exports=Router;