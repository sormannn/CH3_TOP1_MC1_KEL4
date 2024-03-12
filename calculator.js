// Definisikan modul calculator
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) {
        return "Error: division by zero";
      } else if (a === 0) {
        return 0;
      } else {
        return a / b;
      }
    },
    modulo: (a, b) => (b === 0 ? "Error: division by zero" : a % b === 0 ? 0 : a % b),
  };
  
  // Export modul calculator
  module.exports = calculator;
