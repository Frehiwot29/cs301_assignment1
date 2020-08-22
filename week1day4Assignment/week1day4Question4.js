const prompt = require("prompt-sync")();
let inputNumber = parseInt(prompt("Enter inputnumber"));
let sum = 0;
for (let i = 1; i <= inputNumber; i += 2) {
  sum += i;
}
console.log(sum);
