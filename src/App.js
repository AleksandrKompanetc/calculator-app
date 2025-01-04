import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  const calculateResult = (expression) => {
    const operators = expression.split(/[\d.]+/).filter((op) => op);
    const numbers = expression.
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className='display'>{input || '0'}</div>
      <div className='buttons'>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+", "="].map(
          (value) => (
            <button key={value} onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
