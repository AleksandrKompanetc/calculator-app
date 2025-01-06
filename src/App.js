import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const calculateResult = (expression) => {
    try {
      const operators = expression.split(/[\d.]+/).filter((op) => op);
      const numbers = expression.split(/[-+*/]/).map(Number);
      
      if (numbers.length === 0 || operators.length === 0) {
        throw new Error("Invalid expression");
      }

      let result = numbers[0];
      for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];
        if (operator === "+") result += nextNumber;
        else if (operator === "-") result -= nextNumber;
        else if (operator === "*") result *= nextNumber;
        else if (operator === "/") result /= nextNumber;
        else throw new Error("Unknown operator");
      }
      return result;
    } catch (error) {
      return "Error";
    }
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      const result = calculateResult(input);
      setInput(result.toString());
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ("0123456789+-*/.".includes(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        const result = calculateResult(input);
        setInput(result.toString());
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Escape") {
        setInput("");
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
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
};

export default App;
