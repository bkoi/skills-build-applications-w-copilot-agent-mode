import express from 'express';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
import { connectDatabase } from './config/database.js';

const app = express();
const port = process.env.PORT ?? 8000;

export const getApiUrl = (): string => {
  if (process.env.CODESPACE_NAME) {
    return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
  }
  return `http://localhost:${port}`;
};

export const startServer = async (): Promise<void> => {
  const apiUrl = getApiUrl();

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.json({
      message: 'OctoFit Tracker backend is running.',
      apiUrl,
    });
  });

  app.use('/api/users', usersRouter);
  app.use('/api/teams', teamsRouter);
  app.use('/api/activities', activitiesRouter);
  app.use('/api/leaderboard', leaderboardRouter);
  app.use('/api/workouts', workoutsRouter);

  await connectDatabase();
  console.log('MongoDB connected.');

  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
    console.log(`API URL: ${apiUrl}`);
  });
};
