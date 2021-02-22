let prompt = require("prompt-sync")();
let gpa = prompt("please Enter your gpa ");
gpa = parseFloat(gpa);
let grade;
if (gpa === 4.0) {
  grade = "A";
} else if (gpa >= 3.8) {
  grade = "B";
} else if (gpa >= 3.2) {
  grade = "C";
} else {
  grade = "NG";
}
console.log("you grade is " + grade);
