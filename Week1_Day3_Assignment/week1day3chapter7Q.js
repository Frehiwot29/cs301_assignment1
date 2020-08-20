const prompt = require("prompt-sync")();
/*input get age and season
 process  enter the age and next season
 output identifing the bedtime based on the season
*/
let age = parseInt(prompt("Enter age"));
let season = prompt("Enter season");
let bedTime;

if (age >= 5) {
  if ((season = "summer" || "fall")) {
    bedTime = "8:30pm";
  } else if ((season = "winter" || "spring")) {
    bedTime = "8:0pm";
  }
} else if (age > 6 && age < 12) {
  if ((season = "summer")) {
    bedTime = "9:30pm";
  } else if ((season = "winter" || "spring" || "fall")) {
    bedTime = "8:30pm";
  }
} else if (age >= 13) {
  if ((season = "summer")) {
    bedTime = "10:30pm";
  } else if ((season = "winter" || "spring" || "fall")) {
    bedTime = "9:30pm";
  }
}
console.log(bedTime);
