"use strict";
function extractGivenName(fullName) {
  let space = fullName.indexOf(" ");
  let familly = fullName.substring(space, fullName.length);
  return familly;
}
console.log(extractGivenName("Asfaw, frehiwot"));
