import React, { useState } from 'react';

function App() {
  // Define state variables
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Define event handlers
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React application.</p>
      <hr />
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <h2>Input Field</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>Text entered: {text}</p>
    </div>
  );
}

export default App;
