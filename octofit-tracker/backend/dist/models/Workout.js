import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: String,
    exercises: [
        {
            name: { type: String, required: true },
            sets: { type: Number, required: true },
            reps: { type: Number, required: true },
            weight: Number,
        },
    ],
    duration: { type: Number, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    createdAt: { type: Date, default: Date.now },
});
export const Workout = mongoose.model('Workout', workoutSchema);
