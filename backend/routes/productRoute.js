const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");


const router=express.Router();

// create product -- Admin
router.route("/product/new").post(createProduct);


//get all Products
router.route("/products").get(getAllProducts);

//update product
router.route("/product/:id").put(updateProduct).delete(deleteProduct);





module.exports = router;