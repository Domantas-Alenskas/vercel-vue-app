import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test endpoint
app.get('/api', (req, res) => {
  res.json({ message: `Hello from Express server! ${port}` });
});

// Catch-all route for /api/*
app.get('/api/*', (req, res) => {
  res.json({ message: 'API endpoint hit', path: req.path });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 