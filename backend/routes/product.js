const express = require("express");

const router = express.Router();

const { createProduct } = require("../controller/products");

router.route("/products").post(createProduct);

module.exports = router;
