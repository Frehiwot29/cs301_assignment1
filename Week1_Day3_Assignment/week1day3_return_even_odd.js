const prompt = require("prompt-sync")();

let num = parseInt(prompt("Please enter integer number "));

if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd");
}
