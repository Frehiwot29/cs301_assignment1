let totalNumberOfBox = prompt("please Enter total nummber of box");
let numberOfStack = prompt("please Enter total nummber of stack");
totalNumberOfBox = parseInt(totalNumberOfBox);
numberOfStack = parseInt(numberOfStack);
let numberStack = Math.ceil(totalNumberOfBox / numberOfStack);
console.log(numberStack);
