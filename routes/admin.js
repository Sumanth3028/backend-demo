

const express=require('express')

const productController=require('../controllers/product')

const router=express.Router()

router.get("/add-product", productController.getAddProductPage);
  
router.post("/product",productController.postProductPage);


module.exports=router