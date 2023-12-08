const express=require('express');
const router=express.Router();
const {GetAllUsers,CreateUser}=require("../Controllers/resgister")
router.get("/users",GetAllUsers);
router.post("/",CreateUser)
module.exports=router;