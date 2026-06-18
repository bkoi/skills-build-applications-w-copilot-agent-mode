import { Router, Request, Response } from 'express';
import { Activity } from '../models/Activity.js';

const router = Router();

// GET /api/activities/
router.get('/', async (_req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('userId');
    res.json({ data: activities, count: activities.length });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities', error });
  }
});

// GET /api/activities/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findById(req.params.id).populate('userId');
    if (!activity) return res.status(404).json({ message: 'Activity not found' });
    res.json({ data: activity });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity', error });
  }
});

// POST /api/activities/
router.post('/', async (req: Request, res: Response) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json({ data: activity });
  } catch (error) {
    res.status(400).json({ message: 'Error creating activity', error });
  }
});

// PUT /api/activities/:id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!activity) return res.status(404).json({ message: 'Activity not found' });
    res.json({ data: activity });
  } catch (error) {
    res.status(400).json({ message: 'Error updating activity', error });
  }
});

// DELETE /api/activities/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });
    res.json({ message: 'Activity deleted', data: activity });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting activity', error });
  }
});

export default router;
