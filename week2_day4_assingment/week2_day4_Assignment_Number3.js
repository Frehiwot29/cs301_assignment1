"use strict";
function getSuffix(str1, str2) {
  let reverse = "";
  let count = 0;
  while (true) {
    if (str1[str1.length - 1 - count] === str2[str2.length - 1 - count]) {
      reverse = str1[str1.length - 1 - count] + reverse;
      count++;
    } else {
      break;
    }
  }
  return reverse;
}

console.log(getSuffix("frew", "drew"));
