function rotationRight(arr) {
  for (let i = arr.length - 1; i - 1 >= 0; i--) {
    let swap = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = swap;
  }
  return arr;
}
let list = [2, 4, 5, 6, 7];
console.log(rotationRight(list));
