const Token = require("../models/token");
const Product = require("../models/product");
const handleAsync = require("./handleError");
const joi = require("joi");
const fs = require("fs");
const mongoose = require("mongoose");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const promisify = require("promisify");
const { isFileValid } = require("../utils/file");

module.exports.createProduct = handleAsync(async (req, res, next) => {
  const { name, description, rating, quantity, price } = req.body;
  const form = formidable({ multiples: false, maxFileSize: 50 * 1024 * 1024 });

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  const schema = joi.object({
    name: joi
      .string()
      .require()
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
    name,
    description,
    rating,
    quantity,
    price,
  });

  let product = await Product.findOne({ name: name });
  if (product) {
    res.status(400);
    throw new Error("Product already exists");
  }

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        status: "Fail",
        message: "There was an error parsing the files",
        error: err,
      });
    }

    try {
      const { filepath, newFilename } = files.image;
      if (!filePath || !newFilename) {
        throw new Error("Upload valid image");
      }

      const result = await promisify(cloudinary.uploader.upload)(filepath, {
        public_id: newFilename,
        overwrite: true,
      });

      let product = await Product.create({
        name,
        description,
        rating,
        quantity,
        price,
        image: result.secure_url,
      });
      res.send({ success: true, product });
    } catch (error) {
      res.status(400).send({
        succes: false,
        error: error.message,
      });
    }
  });

  res.send({ success: true, product, message: "Product added successfully" });
});
