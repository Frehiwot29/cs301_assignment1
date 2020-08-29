function rotationLeft(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = swap;
  }
  return arr;
}
let list = [2, 4, 5, 6, 7];
console.log(rotationLeft(list));
