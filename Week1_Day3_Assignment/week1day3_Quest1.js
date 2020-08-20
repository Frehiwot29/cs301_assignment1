const prompt = require("prompt-sync")();
/*input:declar first and second number
process:applay absolute value Math.abs
output:finding the absolute difference */

let num1 = parseFloat(prompt("Enter first number "));
let num2 = parseFloat(prompt("Enter second number "));

let absDiffernce = Math.abs(num2 - num1);
console.log(absDiffernce);
