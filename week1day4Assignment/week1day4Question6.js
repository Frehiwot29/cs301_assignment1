let num = 2;
let output = "";
for (i = 0; i <= 31; i++) {
  let result = Math.pow(num, i);
  output += result + ", ";
}
console.log(output);
