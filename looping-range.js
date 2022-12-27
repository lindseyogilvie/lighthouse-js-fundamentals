function range(start, end, step) {
  rangeArray = [];
  for (let x = start; x <= end; x = x + step) {
    rangeArray.push(x);
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));