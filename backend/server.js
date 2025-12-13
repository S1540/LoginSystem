const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.status(200).json({ message: "Welcome to the Backend" });
});

app.post("/signup", (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let newUser = await new user({
        username,
        email,
        password: hash,
        confirmpassword,
      });
      await newUser.save();
      console.log(newUser);
      const token = jwt.sign({ email: email }, "secret");
      res.cookie("email", token);
      console.log(token);
      res.status(200).json({ message: "User Created Successfully" });
    });
  });
});

app.listen(5000, () =>
  console.log(`Server running on port http://localhost:5000`)
);
