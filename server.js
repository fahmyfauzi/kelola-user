//import packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";

//import files
import connectDB from "./config/db.js";

//setup dotenv
dotenv.config();

//connect mongodb
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("hello world!");
});

//port
const port = process.env.PORT || 3000;

//listen port server
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} on http://localhost:${port}`
      .bgBlue.white
  );
});
