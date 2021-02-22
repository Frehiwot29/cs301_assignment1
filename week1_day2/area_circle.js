let prompt = require("prompt-sync")();
let r = prompt("enter redius");
r = parseFloat(r);
let area = Math.PI * r * r;
while (redius <= 0) {
  console.log(area);
}
