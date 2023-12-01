//import packages
import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Nama harus diisi!'],
        minlength: [3, 'Nama harus lebih dari 3 karakter!'],
    },
    email: {
        type: String,
        required: [true, 'Email harus diisi!'],
        unique: true,
        validate: validator.isEmail,
    },
    password: {
        type: String,
        required: [true, 'Password harus diisi!'],
        minlength: [6, 'Password harus lebih dari 6 karakter'],
    },
    alamat: {
        type: String,
    },
    noHp: {
        type: String,
        // unique: true,
        // validate: validator.isMobilePhone,
    },
    status: {
        type: String,
        enum: ['Lolos', 'Tidak Lolos'],
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        required: true,
        default: 'customer',
    },
    photoProfile: {
        type: String,
    },
});

export default mongoose.model('User', userSchema);