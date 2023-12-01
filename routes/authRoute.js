//import packages
import express from 'express';

//import files
import { register, login } from '../controllers/authController.js';
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authMiddleware.js';

//rest object
const router = express.Router();

//route
router.post('/register', register);

router.post('/login', login);

router.get('/test-verifytoken', verifyToken, (req, res) => {
    res.send('coba verify token customer');
});

router.get('/test-verifyadmin', verifyTokenAndAdmin, (req, res) => {
    res.send('coba verify token admin');
});

export default router;