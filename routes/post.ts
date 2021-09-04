import { Request, Response } from "express";
import express from "express";

const router = express.Router();
router.get("/", (req: Request, res: Response) => {
  res.json({
    post: {
      title: "my first post",
      description: "random data you shouldn't access",
    },
  });
});
export default router;
