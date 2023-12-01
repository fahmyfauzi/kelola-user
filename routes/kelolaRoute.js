//import packages
import express from 'express';

//import files
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authMiddleware.js';
import { getAllAdmin, getAllCustomer } from '../controllers/kelolaController.js';

const router = express.Router();

//route bisa diakses oleh user biasa
router.get('/customer', verifyToken, getAllCustomer);
router.get('/admin', verifyToken, getAllAdmin);

export default router;