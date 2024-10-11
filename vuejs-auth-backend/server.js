// Simple Express server for user authentication
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Mock database to store usernames and passwords
const users = [
  { username: 'admin', password: 'password123' },
  { username: 'user1', password: 'password1' },
  { username: 'kamjamie', password: 'vuejs' }
];

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
