const prompt = require("prompt-sync")();

let ordinaryDays = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelvth",
];
let myGiftsOfLyrecs = [
  "a partridge in a pear tree",
  "two turtle doves",
  "three french hens",
  "four calling birds",
  "five golden rings",
  "six geese laying",
  "seven swans swimming",
  "eight maids a milking",
  "nine ladies dancing",
  "ten lords a leaping",
  "eleven pipers pips",
  "twelive drumers druming",
];
function englishChristmas(ordinaryDays, myGiftsOfLyrecs) {
  let userInput = prompt("please enter a number");
  userInput = parseInt(userInput);
  let str =
    "On the " +
    ordinaryDays[userInput - 1] +
    " day of Christmas, my true love gave to me: ";
  let i = userInput - 1;
  while (i >= 0) {
    if (i === 0) {
      str += "and " + myGiftsOfLyrecs[i];
      break;
    }
    str += myGiftsOfLyrecs[i] + ",\n";
    i--;
  }
  return str;
}
console.log(englishChristmas(ordinaryDays, myGiftsOfLyrecs));
