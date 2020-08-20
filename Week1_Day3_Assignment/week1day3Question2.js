const prompt = require("prompt-sync")();
/*input:declar weather andfootwear
process:applaying the equality of string and if else 
output:popup the feetwear */
let weather = prompt("Enter weather");
let footWear;

if (weather === "hot") {
  footWear = "Sandals";
} else if (weather === "rain") {
  footWear = "galosheos";
} else if (weather === "snow") {
  footWear = "boots";
} else {
  footWear = "shoes";
}
console.log(footWear);
