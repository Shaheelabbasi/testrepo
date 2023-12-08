const express=require('express');
const Router=express.Router();
const{Handlelogin}=require("../Controllers/login")
Router.post("/",Handlelogin);

module.exports=Router;

