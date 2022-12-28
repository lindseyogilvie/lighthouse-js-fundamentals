function range(start, end, step) {
  const rangeArray = [];
  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined) {
    return rangeArray;
  }
  
  else for (let x = start; x <= end; x = x + step) {
    rangeArray.push(x);
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 0, 4));