import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profilePicture: String,
    bio: String,
    joinedAt: { type: Date, default: Date.now },
    totalActivities: { type: Number, default: 0 },
    totalDistance: { type: Number, default: 0 },
    totalDuration: { type: Number, default: 0 },
});
export const User = mongoose.model('User', userSchema);
