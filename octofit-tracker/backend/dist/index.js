import express from 'express';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
import { connectDatabase } from './config/database.js';
const app = express();
const port = process.env.PORT ?? 8000;
// Determine API URL (Codespaces-aware)
const getApiUrl = () => {
    if (process.env.CODESPACE_NAME) {
        return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
    }
    return `http://localhost:${port}`;
};
const apiUrl = getApiUrl();
app.use(express.json());
app.get('/', (_req, res) => {
    res.json({
        message: 'OctoFit Tracker backend is running.',
        apiUrl: apiUrl,
    });
});
// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
connectDatabase()
    .then(() => {
    console.log('MongoDB connected.');
    app.listen(port, () => {
        console.log(`Backend listening on http://localhost:${port}`);
        console.log(`API URL: ${apiUrl}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
});
