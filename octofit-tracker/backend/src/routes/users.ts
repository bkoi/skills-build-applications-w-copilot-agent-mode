import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/users/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Get all users' });
});

// GET /api/users/:id
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get user ${req.params.id}` });
});

// POST /api/users/
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a new user' });
});

// PUT /api/users/:id
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update user ${req.params.id}` });
});

// DELETE /api/users/:id
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

export default router;
