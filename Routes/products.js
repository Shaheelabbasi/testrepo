const express=require('express')
const Router=express.Router();

const{Getproducts}=require('../Controllers/products')

Router.get('/',Getproducts);
module.exports=Router;
