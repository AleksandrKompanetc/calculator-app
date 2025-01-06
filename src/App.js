import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const calculateResult = (expression) => {
    try {
      // Простая логика для обработки выражений
      const operators = expression.split(/[\d.]+/).filter((op) => op); // Извлекаем операторы
      const numbers = expression.split(/[-+*/]/).map(Number); // Извлекаем числа
      
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
      setInput(""); // Очистить ввод
    } else {
      setInput(input + value); // Добавить символ к текущему вводу
    }
  };

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
