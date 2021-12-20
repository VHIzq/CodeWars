  function findSmallestInt(array) {
    return array.sort( (a, b) => a - b)[0];
    //return Math.min(...array);
  }
  console.log(findSmallestInt([15, 34, 10, 5, 23, -4]));


