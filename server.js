import express from 'express';
const app = express();
const port = process.env.PORT || 3020;

// Middleware to parse JSON bodies
app.use(express.json());

// Test endpoint
app.get('/api', (req, res) => {
  res.json({ message: `Hello from Express server! ${port} ${process.env.NODE_ENV} ${process.env}`});
});

// Catch-all route for /api/*
app.get('/api/*', (req, res) => {
  res.json({ message: 'API endpoint hit', path: req.path });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 