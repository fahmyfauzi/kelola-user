//import packages
import express from 'express';

//import files
import { register, login } from '../controllers/authController.js';

//rest object
const router = express.Router();

//route
router.post('/register', register);

router.post('/login', login);

export default router;