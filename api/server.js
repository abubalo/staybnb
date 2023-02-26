const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const route = express.Router();
const User = require("./models/User.js");
const bcrypt = require("bcrypt");

const bcryptSalt = bcrypt.genSaltSync(10);
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);

console.log(process.env.MONGO_URL);
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});
app.get("/test", (req, res) => {
  res.json("text ok");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
