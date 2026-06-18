import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: number;
    weight?: number;
  }>;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>({
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

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
