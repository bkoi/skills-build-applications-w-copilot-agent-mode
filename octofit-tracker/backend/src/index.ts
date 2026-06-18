import { startServer } from './server.js';

startServer().catch((error) => {
  console.error('MongoDB connection failed:', error);
  process.exit(1);
});
