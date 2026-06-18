import { Router } from 'express';
import { Workout } from '../models/Workout.js';
const router = Router();
// GET /api/workouts/
router.get('/', async (_req, res) => {
    try {
        const workouts = await Workout.find().populate('userId');
        res.json({ data: workouts, count: workouts.length });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error });
    }
});
// GET /api/workouts/:id
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id).populate('userId');
        if (!workout)
            return res.status(404).json({ message: 'Workout not found' });
        res.json({ data: workout });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching workout', error });
    }
});
// POST /api/workouts/
router.post('/', async (req, res) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.status(201).json({ data: workout });
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating workout', error });
    }
});
// PUT /api/workouts/:id
router.put('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout)
            return res.status(404).json({ message: 'Workout not found' });
        res.json({ data: workout });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating workout', error });
    }
});
// DELETE /api/workouts/:id
router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout)
            return res.status(404).json({ message: 'Workout not found' });
        res.json({ message: 'Workout deleted', data: workout });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting workout', error });
    }
});
export default router;
