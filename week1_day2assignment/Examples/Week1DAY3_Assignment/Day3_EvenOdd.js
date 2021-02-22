const prompt = require("prompt-sync")();
let input = parseInt(prompt("please enter a number"));
input = parseInt(input);
if (input % 2 === 0) {
  console.log(input + "is even");
} else if (input % 2 === 1) {
  console.log(inpute + "is odd number");
} else {
  console.log("input is wrong number");
}
