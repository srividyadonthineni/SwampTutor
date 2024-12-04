const express = require('express');
const cors = require('cors'); // Import cors
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
console.log("JWT Secret:", process.env.JWT_SECRET);
const app = express();

const PORT = process.env.PORT || 5001;

// In-memory user data for testing
const users = [
  {
    id: 1,
    username: 'testuser',
    password: 'password123'
  }
];

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for incoming requests

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && user.password === password) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});


// Import bcrypt for password hashing
const bcrypt = require('bcrypt');

// Registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  users.push({ id: users.length + 1, username, password: hashedPassword });

  return res.status(201).json({ message: 'User registered successfully' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
