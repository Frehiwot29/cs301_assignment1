let gasUsed = parseFloat(prompt("please enter gasoil used"));
let beginOdo = parseFloat(prompt("please enter biging odometer"));
let endOdo = parseFloat(prompt("please enter end Odometer"));

let mileAgePerGalon = (endOdo - beginOdo) / gasUsed;

console.log(mileAgePerGalon);
