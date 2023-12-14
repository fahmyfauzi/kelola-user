//import packages
import express from 'express';

//import files
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authMiddleware.js';
import { getAllAdmin, getAllCustomer, addCustomerHandler, getCustomersHandler, addAdminHandler, getAdminHandler } from '../controllers/kelolaController.js';

const router = express.Router();

//route bisa diakses oleh user biasa
router.get('/customer', getAllCustomer);
router.get('/admins', getAllAdmin);

//crud
router.get('/customers', getCustomersHandler);
router.post('/customers', addCustomerHandler);

router.get('/admin', getAdminHandler);
router.post('/admin', addAdminHandler);

export default router;
