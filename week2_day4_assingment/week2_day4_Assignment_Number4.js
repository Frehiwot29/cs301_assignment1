"use strict";
function swiichCase(str) {
  let str1 = str.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str1[i]) {
      result += str[i].toUpperCase();
    } else {
      result += str1[i];
    }
  }
  return result;
}
console.log(swiichCase("FreHiwot"));
