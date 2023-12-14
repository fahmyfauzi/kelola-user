//import files
import User from '../models/userModel.js';
import Customer from '../models/customerModel.js';
import Admin from '../models/adminModel.js';

const getAllCustomer = async (req, res, next) => {
  const customer = await User.find({ role: 'customer' }).select('-password');
  res.status(200).json({
    success: true,
    count: customer.length,
    data: customer,
  });
};

const getAllAdmin = async (req, res, next) => {
  const customer = await User.find({ role: 'admin' }).select('-password');
  res.status(200).json({
    success: true,
    count: customer.length,
    data: customer,
  });
};

const addCustomerHandler = async (req, res, next) => {
  try {
    const { nama, status, alamat, noHp } = req.body;

    if (!nama || !status || !alamat || !noHp) {
      return res.status(400).json({
        success: false,
        message: 'Nama, Status, Alamat, dan No Hp harus diisi',
      });
    }

    // create user
    const customer = await Customer.create({
      nama,
      alamat,
      noHp,
      status,
    });

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: customer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getCustomersHandler = async (req, res, next) => {
  const customer = await Customer.find();
  res.status(200).json({
    success: true,
    count: customer.length,
    data: customer,
  });
};

const addAdminHandler = async (req, res, next) => {
  try {
    const { nama, alamat, noHp } = req.body;

    if (!nama || !alamat || !noHp) {
      return res.status(400).json({
        success: false,
        message: 'Nama, Alamat, dan No Hp harus diisi',
      });
    }

    // create user
    const admin = await Admin.create({
      nama,
      alamat,
      noHp,
    });

    return res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: admin,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getAdminHandler = async (req, res, next) => {
  const admin = await Admin.find();
  res.status(200).json({
    success: true,
    count: admin.length,
    data: admin,
  });
};

export { getAllCustomer, getAllAdmin, addCustomerHandler, getCustomersHandler, addAdminHandler, getAdminHandler };
