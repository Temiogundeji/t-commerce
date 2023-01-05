const User = require("./../models/user");
const Token = require("../models/token");
const handleAsync = require("./handleError");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const fs = require("fs");
const mongoose = require("mongoose");
const mailer = require("../utils/mailer");

module.exports.signup = handleAsync(async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  const welcomeEmail = fs.readFileSync(
    path.join(__dirname, "./../templates/welcome.html"),
    {
      encoding: "utf-8",
    }
  );

  const schema = joi.object({
    firstName: joi
      .string()
      .required()
      .error(new Error("Please include first name"))
      .min(1),
    lastName: joi
      .string()
      .required()
      .error(new Error("Please include first name"))
      .min(1),
    email: joi
      .string()
      .min(1)
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .error(new Error("Please provide valid email")),
    password: joi
      .string()
      .required()
      .min(2)
      .error(new Error("Please include password")),
    phoneNumber: joi
      .string()
      .required()
      .error(new Error("Please include phone number")),
  });
  await schema.validateAsync({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  });
  const tempToken = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
  let user = await User.findOne({ email: email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  user = await User.create({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(String(password), 10),
    phoneNumber,
  });

  let token = await Token.create({ userId: user._id, token: tempToken });

  const redirectUrl = `${process.env.BASE_URL}/user/verify/${user._id}/${token.token}`;
  res.send({ success: true, user, message: "Signup successful" });

  // mailer(
  //   user.email,
  //   "Welcome to TCommerce, verify account",
  //   welcomeEmail
  //     .replace("{{LINK}}", redirectUrl.toString())
  //     .replace("{{NAME}}", firstName)
  // ).catch(err => console.error(err));
});

module.exports.socialAuth = handleAsync(async (req, res) => {});

module.exports.login = handleAsync(async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user || !bcrypt.compareSync(String(req.body.password), user.password)) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  const { password, ...rest } = user.toJSON();
  if (!rest?.isActive) throw new Error("Please verify your email");

  res.send({ success: true, user: rest, token });
});
