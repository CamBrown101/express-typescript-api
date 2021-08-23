import { Request, Response } from "express";
import express from "express";
import User from "../model/User";

const router = express.Router();

//Validation
import Joi from "@hapi/joi";

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req: Request, res: Response) => {
  //Validate data
  const { error } = schema.validate(req.body);
  if (error) res.send(error.details[0].message);

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
