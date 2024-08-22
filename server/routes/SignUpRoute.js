import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

const router = express.Router();

router.post("/SignUp", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }
    const PasswordSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, PasswordSalt);
    user = new User({
      name,
      email,
      passwordHash,
    });
    await user.save();
    const payload = { userId: user.id };
    const token = jwt.sign(payload, "your_jwt_secret", { expiresIn: "1h" });
    res.status(201).json({ token });
  } catch (error) {
    console.error("The Signup Function error is:", error.message);
    res.status(500).json("Server Error");
  }
});

export default router;
