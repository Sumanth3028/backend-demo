const path=require('path')

const products=[]

exports.getAddProductPage=(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  }


exports.postProductPage=(req, res, next) => {
    products.push({title:req.body.title})
    res.redirect("/");
  }


exports.getProducts=(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
  }