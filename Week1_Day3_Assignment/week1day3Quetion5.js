const prompt = require("prompt-sync")();
/* input :dicullarin the patronstatus and 
   overdue of student,faculity,and others
   process: based on overdue and patronstatus get patronstatus and overdue
    output:identify loan duration*/

let patronStatus = prompt("Enter status");
let numOverDue = parseInt(prompt("Enter overdue"));
let loanDuration;
if (patronStatus === "student") {
  if (numOverDue === 0) {
    loanDuration = 6;
  } else if (numOverDue < 3) {
    loanDuration = 4;
  } else if (numOverDue >= 3) {
    loanDuration = 2;
  }
} else if (patronStatus === "faculty") {
  if (numOverDue === 0) {
    loanDuration = 16;
  } else if (numOverDue < 3) {
    loanDuration = 12;
  } else if (numOverDue >= 3) {
    loanDuration = 8;
  }
} else if (patronStatus === "other") {
  if (numOverDue === 0) {
    loanDuration = 4;
  } else if (numOverDue < 3) {
    loanDuration = 3;
  } else if (numOverDue >= 3) {
    loanDuration = 2;
  }
}
console.log(loanDuration);
