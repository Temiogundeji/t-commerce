const handleAsync = require("./handleError");
const joi = require("joi");
const fs = require("fs");
const mongoose = require("mongoose");
const Category = require("../models/category");

module.exports.getProductsByCategory = handleAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  
});

module.exports.createCategory = handleAsync(async (req, res, next) => {
  const schema = joi.object({
    name: joi
      .string()
      .required()
      .error(new Error("Please include category name"))
      .min(1),
  });
  const { name } = req.body;
  await schema.validateAsync({
    name,
  });

  try {
    let category = await Category.create({
      name,
    });
    res.send({
      success: true,
      category,
      message: "Category created successfully",
    });
  } catch (error) {
    res.status(400).send({
      succes: false,
      error: error.message,
    });
  }
});
