const express = require("express");
const path = require("path");

const router = express.Router();

const {
  signup,
  login,
  forgetPassword,
  activateAccount,
  me,
  generateToken,
} = require("../controller/users");
console.log(path.join(__dirname));

router.route("/auth/signup").post(signup);
router.route("/auth/login").post(login);

module.exports = router;
