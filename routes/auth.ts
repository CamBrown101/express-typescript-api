import { Request, Response } from "express";
const router = require('express').Router();

router.post('/register', (req: Request,res: Response) => {
    res.send('Register')
})

router.post('/login', (req: Request,res: Response) => {
    res.send('Login')
});

module.exports = router