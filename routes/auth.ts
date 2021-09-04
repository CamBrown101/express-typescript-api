import { Request, Response } from "express";
import express from "express";
import bcrypt from "bcryptjs";
import User from "../model/User";
import { registerValidation } from "../validation";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  //Validate data
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //Check if user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  //Save user
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
