//import files
import User from '../models/userModel.js';

const getAllCustomer = async(req, res, next) => {
    const customer = await User.find({ role: 'customer' }).select('-password');
    res.status(200).json({
        success: true,
        count: customer.length,
        data: customer,
    });
};

const getAllAdmin = async(req, res, next) => {
    const customer = await User.find({ role: 'admin' }).select('-password');
    res.status(200).json({
        success: true,
        count: customer.length,
        data: customer,
    });
};

export { getAllCustomer, getAllAdmin };