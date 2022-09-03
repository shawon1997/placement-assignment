const express = require("express");
const env = require("dotenv");
const app = express();
const connect=require('./config/db.config')
const cors = require("cors");
app.use(cors());
app.options("*", cors());
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

env.config();

app.use(express.json());
app.use("/", authRoutes);
app.use("/", productRoutes);

app.listen(process.env.PORT, async() => {
  try {
    await connect()
    console.log(`I am connected with ${process.env.PORT}`);
  } catch (err) {
    console.log(err)
  }
});
