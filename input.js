// const r1=require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// r1.question("Enter something: ",
// (answer) => {
//     console.log("You entered:", answer);
//     r1.close();
// });
const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  r1.question("Enter first number: ", (a) => {
    r1.question("Enter second number: ", (b) => {
  
      const num1 = Number(a);
      const num2 = Number(b);
  
      console.log("Addition:", num1 + num2);
      console.log("Subtraction:", num1 - num2);
      console.log("Multiplication:", num1 * num2);
      console.log("Division:", num2 !== 0 ? num1 / num2 : "Error: divide by zero");
  
      r1.close();
    });
  });
  