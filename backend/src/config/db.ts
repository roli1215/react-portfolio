import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
      const MONGO_URL = process.env.MONGO_URL;
      if (!MONGO_URL) {
        throw new Error('MONGO_URL is not defined in the environment variables');
      }
  
      await mongoose.connect(MONGO_URL,{dbName : 'portfolio'});
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); 
    }
  };
  
  export default connectDB;