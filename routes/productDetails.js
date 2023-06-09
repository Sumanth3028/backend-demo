const express = require("express");

const router = express.Router();

const path = require("path");

const productController = require("../controllers/product");

router.post("/product", productController.postProductPage);

module.exports = router;
