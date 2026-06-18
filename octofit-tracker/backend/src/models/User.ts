import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  joinedAt: Date;
  totalActivities: number;
  totalDistance: number;
  totalDuration: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  profilePicture: String,
  bio: String,
  joinedAt: { type: Date, default: Date.now },
  totalActivities: { type: Number, default: 0 },
  totalDistance: { type: Number, default: 0 },
  totalDuration: { type: Number, default: 0 },
});

export const User = mongoose.model<IUser>('User', userSchema);
