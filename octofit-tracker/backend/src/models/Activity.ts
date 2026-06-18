import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  activityType: string;
  distance: number;
  duration: number;
  calories: number;
  date: Date;
  description?: string;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activityType: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: String,
});

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
