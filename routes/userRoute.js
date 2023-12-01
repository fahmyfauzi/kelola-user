//import packages
import express from 'express';

//import files
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authMiddleware.js';
import { updateUser } from '../controllers/userController.js';

//rest object
const router = express.Router();

//update user
router.put('/:id', verifyTokenAndAdmin, updateUser);

export default router;