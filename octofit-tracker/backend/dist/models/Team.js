import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    totalActivities: { type: Number, default: 0 },
    teamScore: { type: Number, default: 0 },
});
export const Team = mongoose.model('Team', teamSchema);
