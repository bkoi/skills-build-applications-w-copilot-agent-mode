import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/leaderboard/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Get global leaderboard' });
});

// GET /api/leaderboard/teams
router.get('/teams', (_req: Request, res: Response) => {
  res.json({ message: 'Get team leaderboard' });
});

// GET /api/leaderboard/:userId
router.get('/:userId', (req: Request, res: Response) => {
  res.json({ message: `Get leaderboard position for user ${req.params.userId}` });
});

export default router;
