//import packages
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//import files
import User from '../models/userModel.js';

const register = async(req, res, next) => {
    //define
    const { nama, email, password } = req.body;

    //validate name
    if (!nama) {
        next('Nama harus di isi');
    }

    //validate email
    if (!email) {
        next('email harus di isi');
    }

    //validate password
    if (!password) {
        next('Password harus di isi');
    }

    //validate email already
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(200).json({
            success: false,
            message: 'Email already register please login',
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
        message: 'User created successfully',
        data: {
            nama: user.nama,
            email: user.email,
            password: user.password,
        },
    });
};

const login = async(req, res, next) => {
    //define
    const { email, password } = req.body;

    //validate email
    if (!email) {
        next('email harus di isi');
    }

    //validate password
    if (!password) {
        next('password harus di isi');
    }

    //cek email
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        //setup jwt
        const accessToken = jwt.sign({
                //payload data
                user: {
                    id: user.id,
                    email: user.email,
                    nama: user.nama,
                    role: user.role,
                },
            },
            process.env.SECRET_KEY, { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            message: 'Login success',
            user,
            accessToken,
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Email atau password salah!',
        });
    }
};

export { register, login };