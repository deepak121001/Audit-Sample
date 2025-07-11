const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Intentional ESLint issues for testing

// Unused variable
const unusedVar = 'this is unused';

// Missing semicolon
const missingSemicolon = 'test'

// Console.log statements
console.log('Server starting...');

// Hardcoded secret for security testing
const apiKey = 'sk-1234567890abcdef';
const password = 'admin123';

// Unsafe eval usage
const userInput = 'alert("xss")';
eval(userInput);

// SQL injection vulnerability
const userQuery = req.body.query;
const sql = `SELECT * FROM users WHERE name = '${userQuery}'`;

// XSS vulnerability
app.get('/xss', (req, res) => {
  const userInput = req.query.input;
  res.send(`<div>${userInput}</div>`);
});

// Missing error handling
app.get('/api/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

// Inconsistent return
function getUsers() {
  if (Math.random() > 0.5) {
    return ['user1', 'user2'];
  }
  // Missing return statement
}

// Unused parameter
app.get('/api/test', (req, res, next) => {
  res.json({ message: 'test' });
});

// Missing await
async function fetchData() {
  const response = fetch('https://api.example.com/data');
  return response.json();
}

// Unsafe regex
const unsafeRegex = /^[a-zA-Z0-9]+$/;

// Missing strict mode
const strictModeTest = 'test';

// Inconsistent spacing
const spacingTest='test';

// Unreachable code
function unreachable() {
  return 'test';
  console.log('This will never execute');
}

// Missing try-catch
function riskyFunction() {
  const result = JSON.parse('invalid json');
  return result;
}

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Missing error handling middleware
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 