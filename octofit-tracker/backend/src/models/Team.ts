import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description?: string;
  members: mongoose.Types.ObjectId[];
  leader: mongoose.Types.ObjectId;
  createdAt: Date;
  totalActivities: number;
  teamScore: number;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  totalActivities: { type: Number, default: 0 },
  teamScore: { type: Number, default: 0 },
});

export const Team = mongoose.model<ITeam>('Team', teamSchema);
