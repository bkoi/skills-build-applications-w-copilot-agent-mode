import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard.js';
const router = Router();
// GET /api/leaderboard/
router.get('/', async (_req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ rank: 1 }).limit(100);
        res.json({ data: leaderboard, count: leaderboard.length });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
});
// GET /api/leaderboard/teams
router.get('/teams', async (_req, res) => {
    try {
        res.json({ message: 'Get team leaderboard - not yet implemented' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching team leaderboard', error });
    }
});
// GET /api/leaderboard/:userId
router.get('/:userId', async (req, res) => {
    try {
        const entry = await Leaderboard.findOne({ userId: req.params.userId });
        if (!entry)
            return res.status(404).json({ message: 'User not found on leaderboard' });
        res.json({ data: entry });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard entry', error });
    }
});
export default router;
