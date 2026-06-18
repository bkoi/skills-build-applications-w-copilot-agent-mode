import { Router, Request, Response } from 'express';
import { Team } from '../models/Team.js';

const router = Router();

// GET /api/teams/
router.get('/', async (_req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate('members').populate('leader');
    res.json({ data: teams, count: teams.length });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teams', error });
  }
});

// GET /api/teams/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findById(req.params.id).populate('members').populate('leader');
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json({ data: team });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team', error });
  }
});

// POST /api/teams/
router.post('/', async (req: Request, res: Response) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json({ data: team });
  } catch (error) {
    res.status(400).json({ message: 'Error creating team', error });
  }
});

// PUT /api/teams/:id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json({ data: team });
  } catch (error) {
    res.status(400).json({ message: 'Error updating team', error });
  }
});

// DELETE /api/teams/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json({ message: 'Team deleted', data: team });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting team', error });
  }
});

export default router;
