import mongoose from 'mongoose';

export const DEFAULT_MONGO_URI = 'mongodb://127.0.0.1:27017/octofit_db';

export const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI ?? DEFAULT_MONGO_URI;
  await mongoose.connect(mongoUri);
};
