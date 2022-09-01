const express = require("express");
const User = require("../models/user_model");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
module.exports = router;
