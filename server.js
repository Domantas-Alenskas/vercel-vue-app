import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 