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
  .post(createProduct)
  .get(getProducts);
router.route("/product/:id").get(getProduct);
router.route("/product/:name").get(getProductByName);

module.exports = router;
