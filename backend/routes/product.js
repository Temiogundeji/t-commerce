const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controller/products");

router.route("/products").post(createProduct).get(getProducts);
router.route("/product/:id").get(getProduct);

module.exports = router;
