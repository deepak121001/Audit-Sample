import express from 'express';
import axios from 'axios';
import _ from 'lodash';

// Intentional TypeScript/ESLint issues for testing

// Unused import
import { unused } from 'lodash';

// Any type usage
const anyValue: any = 'test';

// Missing type annotation
const untypedVar = 'test';

// Unused variable
const unusedVar = 'this is unused';

// Console.log statements
console.log('TypeScript app starting...');

// Hardcoded secret for security testing
const apiKey: string = 'sk-1234567890abcdef';

// Unsafe eval usage
const userInput = 'alert("xss")';
eval(userInput);

// XSS vulnerability
const app = express();
app.get('/xss', (req, res) => {
  const userInput = req.query.input as string;
  res.send(`<div>${userInput}</div>`);
});

// Missing error handling
app.get('/api/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

// Inconsistent return type
async function getUsers(): Promise<string[]> {
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
  const response = axios.get('https://api.example.com/data');
  return response.data;
}

// Unsafe regex
const unsafeRegex = /^[a-zA-Z0-9]+$/;

// Inconsistent spacing
const spacingTest='test';

// Unreachable code
function unreachable(): string {
  return 'test';
  console.log('This will never execute');
}

// Missing try-catch
function riskyFunction() {
  const result = JSON.parse('invalid json');
  return result;
}

// No explicit return type
function noReturnType() {
  return 'test';
}

// Using any in function parameter
function processData(data: any) {
  return data;
}

// Missing null check
function processUser(user: { name?: string }) {
  return user.name.toUpperCase();
}

// Unused interface
interface UnusedInterface {
  name: string;
  age: number;
}

// Missing strict null checks
function strictNullCheck(value: string | null) {
  return value.toUpperCase();
}

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello TypeScript World!' });
});

// Missing error handling middleware
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

export default app; 