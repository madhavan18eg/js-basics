// 🔹 mathOperations.js
// 👉 I know HOW to do math”
// 🔹 calculator.js
// 👉 I decide WHEN and HOW math is used”
// 🔹 app.js
// 👉 I just want the answer, I don’t care HOW”

const math = require("./mathOperations");

function calculateAdd(a, b) {
    if(a%2==0)
    {
  return math.add(a, b);
    }
    return("Its not even number")
}

function calculateSubtract(a, b) {
  return math.subtract(a, b);
}

function calculateMultiply(a, b) {
  return math.multiply(a, b);
}

function calculateDivide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return math.divide(a, b);
}

module.exports = {
  calculateAdd,
  calculateSubtract,
  calculateMultiply,
  calculateDivide
};
