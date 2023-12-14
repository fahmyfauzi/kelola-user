//import files
import User from '../models/userModel.js';
import Customer from '../models/customerModel.js';

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
export { getAllCustomer, getAllAdmin, addCustomerHandler };
