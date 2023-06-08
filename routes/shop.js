const express=require('express')

const router=express.Router()



router.get("/Entry",(req, res, next) => {
    res.send("<h1>Welcome to store</h1>");
  });

  

  module.exports=router