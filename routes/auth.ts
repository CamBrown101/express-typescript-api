import { Request, Response } from "express";
import User from "../model/User";

const router = require("express").Router();

router.post("/register", async (req: Request, res: Response) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", (req: Request, res: Response) => {
  res.send("Login");
});

export default router;
