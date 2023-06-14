const path=require('path')

const Product=require('../models/product')

exports.getAddProductPage=(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  }


exports.postProductPage=(req, res, next) => {
   const product= new Product(req.body.title)
   product.save()
    res.redirect("/");
  }



exports.getProducts=(req, res, next) => {
    Product.fetchAll((products)=>{
        res.sendFile(path.join(__dirname,'../','views','shop.html'))
    })
   
  }