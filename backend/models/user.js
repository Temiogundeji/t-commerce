const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema(
  {
    isExisting: {
      type: String,
      default: false,
    },
    firstName: {
      type: String,
      required: [true, "Please include first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please include last name"],
    },
    email: {
      type: String,
      unique: true,
      validate: [isEmail, "Please add a valid email"],
      sparse: true,
      lowercase: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      // required: [true],
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    image: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
