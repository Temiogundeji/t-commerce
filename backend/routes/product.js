const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  getProductByName,
} = require("../controller/products");
const { authMiddle } = require("../controller/users");

router
  .route("/products")
  .post(authMiddle, createProduct)
  .get(authMiddle, getProducts);
router.route("/product/:id").get(authMiddle, getProduct);
router.route("/product/:name").get(authMiddle, getProductByName);

module.exports = router;
