const express = require('express');
const cors = require('cors'); // Import cors
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for incoming requests

const PORT = process.env.PORT || 5000;

// In-memory user data for testing
const users = [
  {
    id: 1,
    username: 'testuser',
    password: 'password123'
  }
];

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
