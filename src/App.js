import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === "-") {
      try {
        const result = eval(input)
        setInput(result.toString())
      } catch (error) {
        setInput("Error")
      }
    } else if (value === "C") {
      setInput("")
    } else {
      setInput(input + value)
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
