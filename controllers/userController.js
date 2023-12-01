//import files
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const updateUser = async(req, res, next) => {
    const { id } = req.params;
    //find user
    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.status(401).json({ success: false, message: `ID dengan ${id} tidak ditemukan` });
    }

    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    //update user
    const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.status(200).json({
        success: true,
        message: 'Updated successfully',
        data: updateUser,
    });
};

export { updateUser };