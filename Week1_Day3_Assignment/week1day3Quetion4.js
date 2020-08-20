const prompt = require("prompt-sync")();
/*input:declaring the cost and and downpayment
  process: by geting the cost applying relational operaters to the result 
  output:popup and Enter the value to know the downpayment
  */

let cost = parseFloat(prompt("Enter cost"));
let downPayment;

if (cost < 50000) {
  downPayment = 0.05 * cost;
} else if (cost < 100000) {
  downPayment = 2000 + 0.1 * (cost - 50000);
} else if (cost < 200000) {
  downPayment = 7500 + 0.2 * (cost - 100000);
} else {
  downPayment = 27500 + 2.5 * (cost - 200000);
}
console.log(downPayment);
