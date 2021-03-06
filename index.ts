import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

//Import Routes
import authRoute from "./routes/auth";

dotenv.config();

//Connect to DB
if (process.env.DB_CONNECT) {
  mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to DB")
  );
} else {
  console.log("ERROR, No DB_CONNECT ENV");
}

//Middleware
app.use(express.json());
//Route Middlewares
app.use("/api/user", authRoute);

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
