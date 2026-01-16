const Calculator = require("./calculatorService"); 

let a=11;
let b=5;

console.log("Add:"+Calculator.calculateAdd(a,b));
console.log("Subtract:"+Calculator.calculateSubtract(a,b));
console.log("Multiply:"+Calculator.calculateMultiply(a,b));
console.log("Divide:"+Calculator.calculateDivide(a,b));