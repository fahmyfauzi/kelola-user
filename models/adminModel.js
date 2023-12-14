//import packages
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Nama harus diisi!'],
    minlength: [3, 'Nama harus lebih dari 3 karakter!'],
  },
  alamat: {
    type: String,
  },
  noHp: {
    type: String,
    // unique: true,
    // validate: validator.isMobilePhone,
  },
  photoProfile: {
    type: String,
    default: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
});

export default mongoose.model('Admin', adminSchema);
