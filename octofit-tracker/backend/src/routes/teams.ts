import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/teams/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Get all teams' });
});

// GET /api/teams/:id
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get team ${req.params.id}` });
});

// POST /api/teams/
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a new team' });
});

// PUT /api/teams/:id
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update team ${req.params.id}` });
});

// DELETE /api/teams/:id
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete team ${req.params.id}` });
});

export default router;
