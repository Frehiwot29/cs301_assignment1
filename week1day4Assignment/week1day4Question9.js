const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the input"));
let outPut =
  n +
  "\t" +
  2 * n +
  "\t" +
  3 * n +
  "\t" +
  Math.pow(n, 2) +
  "\t" +
  Math.pow(n, 3);
console.log(outPut);
