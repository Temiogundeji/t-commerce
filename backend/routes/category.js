const express = require("express");

const router = express.Router();

const { createCategory } = require("../controller/category");

router
  .route("/products")
  .post(authMiddle, createProduct)
  .get(authMiddle, getProducts);
router.route("/product/:id").get(authMiddle, getProduct);
router.route("/product/:name").get(authMiddle, getProductByName);
router.route("/category").post(createCategory);

module.exports = router;
