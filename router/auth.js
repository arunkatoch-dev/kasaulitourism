const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const Authenticate = require("../middleware/Authenticate");

router.post("/signup", async (req, res) => {
  const { email, phone, name, password, cpassword } = req.body;
  if (!email || !phone || !name || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill all required fields." });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "password and confirm password combination mismatch" });
    } else {
      const user = new User({ email, phone, name, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully..." });
    }
  } catch (err) {
    console.log(err);
  }
});

//  Signin route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill input fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials..." });
      } else {
        res.json({ message: "User Signin Successfully..." });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials..." });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send(`User Logout`);
});

module.exports = router;
