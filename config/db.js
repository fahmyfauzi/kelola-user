import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connect to mongodb database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {}
};

export default connectDB;
