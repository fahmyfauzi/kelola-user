//import packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import 'express-async-errors';

//import files
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import kelolaRoutes from './routes/kelolaRoute.js';
import userRoutes from './routes/userRoute.js';
import errorHandler from './middlewares/errorMiddleware.js';

//setup dotenv
dotenv.config();

//connect mongodb
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//route
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/kelola', kelolaRoutes);
app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

//port
const port = process.env.PORT || 3000;

//listen port server
app.listen(port, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} on http://localhost:${port}`.bgBlue.white);
});