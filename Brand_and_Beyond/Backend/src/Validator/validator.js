const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("username").notEmpty().withMessage("username is Required"),
  check("role").notEmpty().withMessage("Role of the User should be defined"),
  check("email").notEmpty().isEmail().withMessage("Valid Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character"),

];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character"),
];


exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

