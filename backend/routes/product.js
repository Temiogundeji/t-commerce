const express = require("express");

const router = express.Router();

const { createProduct, getProducts } = require("../controller/products");

router.route("/products").post(createProduct).get(getProducts);

module.exports = router;
