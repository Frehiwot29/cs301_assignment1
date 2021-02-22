const prompt = require("prompt-sync")();
function checkPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrime() {
  let num = prompt("please enter a number ");
  num = parseFloat(num);
  let outPut = checkPrime(num);
  console.log(outPut);
}
isPrime();
