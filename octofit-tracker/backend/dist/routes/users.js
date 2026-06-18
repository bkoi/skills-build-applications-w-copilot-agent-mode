import { Router } from 'express';
import { User } from '../models/User.js';
const router = Router();
// GET /api/users/
router.get('/', async (_req, res) => {
    try {
        const users = await User.find();
        res.json({ data: users, count: users.length });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});
// GET /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ data: user });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
// POST /api/users/
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ data: user });
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});
// PUT /api/users/:id
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ data: user });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
});
// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted', data: user });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});
export default router;
