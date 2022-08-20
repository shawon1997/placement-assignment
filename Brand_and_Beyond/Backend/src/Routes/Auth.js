const express = require("express");
const { signin, signup,FechUser } = require("../Controllers/Auth");
//const User=require('../Models/Auth')

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../Validator/validator");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.get("/adminpanel", FechUser);

module.exports = router;
