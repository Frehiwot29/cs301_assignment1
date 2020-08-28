const prompt = require("prompt-sync")();
function tringularArea(a, b, c) {
  let s = (a + b + c) / 2;
  let tringularArea = Math.sqrt(s);
  return tringularArea;
}
function roofVolume(width, depth, sweep) {
  let area = tringularArea(depth, sweep, sweep);
  let roofVolume = area * width;
  return roofVolume;
}
function livingVolume(width, depth, height) {
  let livingVolume = width * depth * height;
  return livingVolume;
}
function houseVolume(width, depth, height, sweep) {
  let roof_Volume = roofVolume(width, depth, sweep);
  let living_Volume = livingVolume(width, depth, height);
  let houseVolume = roof_Volume + living_Volume;
  return houseVolume;
}
function outPutResult() {
  let depth = parseFloat(prompt("please enter the value Depth"));
  let width = parseFloat(prompt("please enter the value Width"));
  let height = parseFloat(prompt("please enter the value height"));
  let sweep = parseFloat(prompt("please enter the value Sweep"));
  let result_House_Volume = houseVolume(width, depth, height, sweep);
  console.log(result_House_Volume);
}
outPutResult();
