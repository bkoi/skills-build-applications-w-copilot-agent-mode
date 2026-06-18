import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/workouts/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Get all workouts' });
});

// GET /api/workouts/:id
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get workout ${req.params.id}` });
});

// POST /api/workouts/
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a new workout' });
});

// PUT /api/workouts/:id
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update workout ${req.params.id}` });
});

// DELETE /api/workouts/:id
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete workout ${req.params.id}` });
});

export default router;
