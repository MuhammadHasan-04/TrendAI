import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPass });
    res.json({ message: "User created", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const Usertoken = {
      username: user.username,
      userId: user.id,
    };

    const token = jwt.sign(Usertoken, process.env.SECRET);

    res.send({ token, username: user.username });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Error User Login" });
  }
});

export default router;
