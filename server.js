import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3020;

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Hello from Express server!',
    environment: process.env.NODE_ENV || 'development',
    port: port
  });
});

// Catch-all route for /api/*
app.get('/api/*', (req, res) => {
  res.json({ message: 'API endpoint hit', path: req.path });
});

// Serve static files from the Vue build directory
app.use(express.static(path.join(__dirname, 'destination-bahamas')));

// Handle Vue Router paths - serve index.html for any non-API route
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'destination-bahamas', 'index.html'));
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`- API available at http://localhost:${port}/api`);
  console.log(`- Frontend available at http://localhost:${port}`);
});

// Export the Express app for Vercel
export default app; 