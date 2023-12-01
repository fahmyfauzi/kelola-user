import jwt from 'jsonwebtoken';

//authentication
const verifyToken = async(req, res, next) => {
    //tangkap header
    const authHeader = req.headers.Authorization || req.headers.authorization;

    //validasi header
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        next('Auth Failed');
    }

    //ambil token
    const token = authHeader.split(' ')[1];

    //validasi token
    try {
        //verifikasi token dengan jwt dan mendapatkan payload
        const payload = jwt.verify(token, process.env.SECRET_KEY);

        //tambahkan informasi pengguna ke object request
        req.user = { userId: payload.user.id, role: payload.user.role };
        // console.log(req.user);
        next();
    } catch (error) {
        next('auth failed');
    }
};

const verifyTokenAndAdmin = async(req, res, next) => {
    //verifikasi token
    verifyToken(req, res, () => {
        //jika user admin
        console.log(req.user);
        if (req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json('You are not allowed to do that');
        }
    });
};

export { verifyToken, verifyTokenAndAdmin };