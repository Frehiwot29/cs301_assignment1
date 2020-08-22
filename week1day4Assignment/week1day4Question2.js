let prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number"));
let message = prompt("please enter phrase ");
for (let i = 0; i < num; i++) {
  console.log(message);
}
