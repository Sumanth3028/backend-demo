const express=require('express')

const router=express.Router()

router.get("/add-product", (req, res, next) => {
    res.send(
      '<form action="/admin/product" method="POST"><input type="text" name="Title"></input><input type="text" name="size"><button>Submit</button></form>'
    );
  });
  
  router.post("/product",(req, res, next) => {
    console.log(req.body);
    res.redirect("/shop/Entry");
  });


module.exports=router