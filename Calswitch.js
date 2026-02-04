const calculator = () => {
    return {
      calculate: function (operation, a, b) {
        switch (operation) {
          case "add":
            return a + b;
  
          case "sub":
            return a - b;
  
          case "mul":
            return a * b;
  
          case "div":
            if (b === 0) {
              return "Error: Division by zero";
            }
            return a / b;
  
          default:
            return "Invalid operation";
        }
      }
    };
  };
  