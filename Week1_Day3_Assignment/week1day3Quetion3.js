const prompt = require("prompt-sync")();
/*input:creadit,
process:applaying relational operater
output:popup the year of schools */
let numCreadit = parseInt(prompt("Enter creadit"));
let yearOfSchool;

if (numCreadit < 30) {
  yearOfSchool = "freshman";
} else if (numCreadit < 60) {
  yearOfSchool = "sophomer";
} else if (numCreadit < 90) {
  yearOfSchool = "junior";
} else {
  yearOfSchool = "senior";
}
console.log(yearOfSchool);
