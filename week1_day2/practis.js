const prompt = require("prompt-sync")();
let salary = prompt("enter a salary");
salary = parseFloat(salary);
let federalTax;
if (salary <= 20000) {
  console.log(federalTax + "don't have to pay a tax");
} else if (salary > 20000 && salary <= 50000) {
  console.log(federalTax + " have to pay 5% of your salary");
} else if (salary > 50000) {
  console.log(federalTax + " have to pay 10% of your salary");
}
