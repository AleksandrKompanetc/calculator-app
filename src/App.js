import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {

  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className='display'>{input || '0'}</div>
      <div className='buttons'>
        
      </div>
    </div>
  );
}

export default App;
