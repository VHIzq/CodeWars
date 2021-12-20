const arrayNumbers = [1, -4, 7, 12];
function positiveSum(arr) {
  
  return arr.filter(num => num > 0).reduce((accum, value ) => accum + value);
}
console.log(positiveSum(arrayNumbers));

