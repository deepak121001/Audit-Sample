import React, { useState, useEffect } from 'react';
import './App.css';

// Intentional ESLint issues for testing
const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  // Missing dependency in useEffect
  useEffect(() => {
    console.log('Component mounted');
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const fetchData = async () => {
    try {
      // Hardcoded secret for security testing
      const apiKey = 'sk-1234567890abcdef';
      const response = await fetch('https://api.example.com/data', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const handleClick = () => {
    setCount(count + 1);
    // Unused variable
    const unusedVar = 'this is unused';
  };
  
  // Missing key prop
  const items = ['item1', 'item2', 'item3'];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Sample App</h1>
        <p>Count: {count}</p>
        <button onClick={handleClick}>
          Increment
        </button>
        
        {/* Missing alt attribute */}
        <img src="logo.png" />
        
        {/* Missing form label */}
        <input type="text" placeholder="Enter text" />
        
        {/* Color contrast issue */}
        <p style={{color: '#cccccc'}}>Low contrast text</p>
        
        {/* List without proper structure */}
        {items.map(item => (
          <div>{item}</div>
        ))}
        
        {data && (
          <div>
            <h2>Data loaded</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
};

export default App; 