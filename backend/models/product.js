const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please include product name"],
    },
    description: {
      type: String,
      required: [true, "Please include product description"],
      default: 0,
    },
    rating: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: [true, "Please include production quantity"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Please include product price"],
    },
    image: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please include product category"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
