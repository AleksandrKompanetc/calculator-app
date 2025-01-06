import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  const calculateResult = (expression) => {
    try {
    const operators = expression.split(/[\d.]+/).filter((op) => op);
    const numbers = expression.split(/[-+*/]/).map(Number);

    if(numbers.length === 0 || operators.length === 0) {
      throw new Error('Invalid expression')
    }

    let result = numbers[0];
    for(let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const nextNumber = numbers[i + 1];
      if(operator === "+") result += nextNumber;
    }
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
