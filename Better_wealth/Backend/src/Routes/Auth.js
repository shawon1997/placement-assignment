const express = require("express");
const { signin, signup,FechUser } = require("../Controllers/Auth");
const User = require("../models/user");
//const User=require('../Models/Auth')

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../Validator/validator");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/user",async(req,res)=>{
const user=await User.create(req.body)
return res.status(201).send(user)
});
router.get("/adminpanel", FechUser);

module.exports = router;
