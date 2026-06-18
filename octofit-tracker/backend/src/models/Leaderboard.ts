import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  userId: mongoose.Types.ObjectId;
  username: string;
  rank: number;
  points: number;
  totalActivities: number;
  totalDistance: number;
  totalDuration: number;
  lastUpdated: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  username: { type: String, required: true },
  rank: { type: Number, required: true },
  points: { type: Number, default: 0 },
  totalActivities: { type: Number, default: 0 },
  totalDistance: { type: Number, default: 0 },
  totalDuration: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

export const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
