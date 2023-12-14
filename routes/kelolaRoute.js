//import packages
import express from 'express';

//import files
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authMiddleware.js';
import { getAllAdmin, getAllCustomer, addCustomerHandler } from '../controllers/kelolaController.js';

const router = express.Router();

//route bisa diakses oleh user biasa
router.get('/customer', getAllCustomer);
router.get('/admin', getAllAdmin);

router.post('/customer', addCustomerHandler);

export default router;
