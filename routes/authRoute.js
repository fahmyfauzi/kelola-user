//import packages
import express from "express";

//import files
import { register } from "../controllers/authController.js";

//rest object
const router = express.Router();

//route
router.post("/register", register);

export default router;
