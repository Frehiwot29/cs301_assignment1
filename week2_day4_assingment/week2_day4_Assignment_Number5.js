"use strict";
function titleCase(str) {
  let strName = str.split(" ");
  for (let i = 0; i < strName.length; i++) {
    strName[i] = strName[i][0].toUpperCase() + strName[i].substring(1);
  }
  return strName.join(" ");
}
console.log(titleCase("der ghu nj"));
