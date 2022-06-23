import mongoose from 'mongoose';
import logger from '../helpers/logger';

const connectDB = async () => {
  try {
    const URI = process.env.MONGODB_URI as string;
    await mongoose.connect(URI, {});
    logger.info('Connect MongoDB Atlas successfully!');
  } catch (error) {
    logger.error('Connect DB has errors ', error);
  }
};
export default connectDB;
