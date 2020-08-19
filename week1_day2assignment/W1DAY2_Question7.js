let prompt = require("prompt-sync")();
let regHours = prompt("Enter regular hours: ");
let hourlyWege = prompt("Enter hourly wege: ");

regHours = parsefloat(regHours);
hourlyWege = parsefloat(hourlyWege);

let grossPay = regHours * hourlyWege;
let tax = grossPay * 0.15;
let netPay = grossPay - tax;

console.log(netPay);
