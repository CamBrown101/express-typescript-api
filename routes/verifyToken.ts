import jwt from "jsonwebtoken";
import { Request, Response } from "express";

function auth(req: any, res: Response, next: Function) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(
      token,
      JSON.stringify(process.env.TOKEN_SECRET)
    );
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
