function multiply(arr) {
  const products = [];
  for (let i = 0; i < arr.length; i++) {
    products[i] = arr[i] * 3;
  }
  return products;
}
const arr1 = [17, 8, 9, 5, 20];
const product_result = multiply(arr1);
console.log(product_result);
