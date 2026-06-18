import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/activities/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Get all activities' });
});

// GET /api/activities/:id
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get activity ${req.params.id}` });
});

// POST /api/activities/
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Log a new activity' });
});

// PUT /api/activities/:id
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update activity ${req.params.id}` });
});

// DELETE /api/activities/:id
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete activity ${req.params.id}` });
});

export default router;
