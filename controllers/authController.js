//import packages
import bcrypt from "bcrypt";

//import files
import User from "../models/userModel.js";

const register = async (req, res, next) => {
  //define
  const { nama, email, password } = req.body;

  //validate name
  if (!nama) {
    next("Nama harus di isi");
  }

  //validate email
  if (!email) {
    next("email harus di isi");
  }

  //validate password
  if (!password) {
    next("Password harus di isi");
  }

  //validate email already
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(200).json({
      success: false,
      message: "Email already register please login",
    });
  }

  //hashing password
  const hashPassword = await bcrypt.hash(password, 10);

  //create user
  const user = await User.create({
    nama,
    email,
    password: hashPassword,
  });

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      nama: user.nama,
      email: user.email,
      password: user.password,
    },
  });
};

export { register };
