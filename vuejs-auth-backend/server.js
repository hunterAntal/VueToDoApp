// Simple Express server for user authentication and registration
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Load users from file or create an empty file if it doesn't exist
let users = [];
if (fs.existsSync(USERS_FILE)) {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  users = JSON.parse(data);
} else {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users));
}

// Helper function to save users to file
const saveUsersToFile = () => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

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

// Sign-up endpoint
app.post('/signup', (req, res) => {
  const { name, age, username, password, role } = req.body;

  // Check if username is already taken
  if (users.find(user => user.username === username)) {
    return res.json({ success: false, message: 'Username is already taken' });
  }

  // Create new user and add to users array
  const newUser = { name, age, username, password, role };
  users.push(newUser);
  saveUsersToFile();

  res.json({ success: true, message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
