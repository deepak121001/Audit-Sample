// Intentional ESLint issues for testing

// Unused variable
const unusedVar = 'this is unused';

// Missing semicolon
const missingSemicolon = 'test'

// Console.log statements
console.log('Vanilla JS app starting...');

// Hardcoded secret for security testing
const apiKey = 'sk-1234567890abcdef';

// Unsafe eval usage
const userInput = 'alert("xss")';
eval(userInput);

// XSS vulnerability
function displayUserInput(input) {
  document.getElementById('output').innerHTML = input;
}

// Missing error handling
function fetchData() {
  const response = fetch('https://api.example.com/data');
  return response.json();
}

// Inconsistent return
function getData() {
  if (Math.random() > 0.5) {
    return ['item1', 'item2'];
  }
  // Missing return statement
}

// Unused parameter
function processData(data, unusedParam) {
  return data;
}

// Missing await
async function fetchUserData() {
  const response = fetch('https://api.example.com/users');
  return response.json();
}

// Unsafe regex
const unsafeRegex = /^[a-zA-Z0-9]+$/;

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

// Global variable pollution
globalVar = 'test';

// Missing strict mode
const strictModeTest = 'test';

// DOM manipulation without checks
function updateElement() {
  document.getElementById('nonexistent').innerHTML = 'test';
}

// Event listener without cleanup
window.addEventListener('load', function() {
  console.log('Page loaded');
});

// Inconsistent naming
const camelCase = 'test';
const snake_case = 'test';

// Counter functionality
let count = 0;
const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

if (incrementBtn) {
  incrementBtn.addEventListener('click', () => {
    count++;
    if (countElement) countElement.textContent = count;
  });
}

if (decrementBtn) {
  decrementBtn.addEventListener('click', () => {
    count--;
    if (countElement) countElement.textContent = count;
  });
}

// Todo functionality
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

if (addTodoBtn && todoInput && todoList) {
  addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value;
    if (todoText.trim()) {
      const li = document.createElement('li');
      li.textContent = todoText;
      todoList.appendChild(li);
      todoInput.value = '';
    }
  });
}

// Security vulnerability - innerHTML usage
function displayUserContent(content) {
  document.getElementById('userContent').innerHTML = content;
}

// Missing null checks
function processUserData(user) {
  return user.name.toUpperCase();
}

// Unsafe object access
function getProperty(obj, prop) {
  return obj[prop];
}

// Missing error boundaries
function divide(a, b) {
  return a / b;
}

// Global function pollution
function globalFunction() {
  console.log('Global function');
}

// Inconsistent quotes
const singleQuotes = 'test';
const doubleQuotes = "test";

// Missing var/let/const
undeclaredVar = 'test';

// Unused function
function unusedFunction() {
  console.log('This function is never called');
}

// Missing JSDoc
function undocumentedFunction(param) {
  return param * 2;
}

// Inconsistent indentation
function inconsistentIndentation() {
const test = 'test';
  return test;
} 