"use strict";
const prompt = require("prompt-sync")();
function farhToCels(f) {
  let cels = (5 / 9) * (f - 32);
  return cels;
}
function inputTemp() {
  let temp_Value = prompt("pleas enter temprature");
  temp_Value = parseFloat(temp_Value);
  let outPut = farhToCels(temp_Value);
  console.log(outPut);
}
inputTemp();
