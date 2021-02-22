let prompt = require("prompt-sync")();
let distanceKm = prompt("please enter the distane in kilometer");
distanceKm = parseFloat(distanceKm);
let distanceInMile = distanceKm / 1.609;
console.log(distanceInMile);
