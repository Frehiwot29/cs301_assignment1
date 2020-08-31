"use strict";
function getPrefix(str1, str2) {
  let reverse = "";
  count = 0;
  while (true) {
    if (str1[0 + count] === str2[0 + count]) {
      reverse += str1[0 + count];
      count++;
    } else {
      break;
    }
  }
  return reverse;
}

console.log(getPrefix("frew", "fred"));
