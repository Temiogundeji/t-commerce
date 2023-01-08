const Token = require("../models/token");
const Product = require("../models/product");
const handleAsync = require("./handleError");
const joi = require("joi");
const fs = require("fs");
const mongoose = require("mongoose");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const { promisify } = require("util");
const { isFileValid } = require("../utils/file");

module.exports.createProduct = handleAsync(async (req, res, next) => {
  const { product_name, description, rating, quantity, price } = req.fields;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  const schema = joi.object({
    product_name: joi
      .string()
      .required()
      .error(new Error("Please include product name"))
      .min(1),
    description: joi
      .string()
      .required()
      .error(new Error("Please include product description"))
      .min(5),
    rating: joi.number(),
    quantity: joi
      .number()
      .required()
      .error(new Error("Please include product quantity")),
    price: joi
      .number()
      .required()
      .error(new Error("Please include product price")),
    image: joi.string(),
  });

  await schema.validateAsync({
    product_name,
    description,
    rating,
    quantity,
    price,
  });

  try {
    const { path, name } = req.files.image;
    console.log(req.files.image);
    if (!path || !name) {
      throw new Error("Upload valid image");
    }

    const result = await promisify(cloudinary.uploader.upload)(path, {
      public_id: name,
      overwrite: true,
    });

    let prod = await Product.findOne({ name: name });
    if (prod) {
      res.status(400);
      throw new Error("Product already exists");
    }

    let product = await Product.create({
      name: product_name,
      description,
      rating,
      quantity,
      price,
      image: result.secure_url,
    });
    res.send({
      success: true,
      product,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(400).send({
      succes: false,
      error: error.message,
    });
  }
});

module.exports.getProducts = handleAsync(async (req, res, next) => {
  const products = await Product.find();
  if (products.length === 0) {
    res.status(404).send({
      message: "No product is available",
    });
  }
  return res.send({ products });
});
