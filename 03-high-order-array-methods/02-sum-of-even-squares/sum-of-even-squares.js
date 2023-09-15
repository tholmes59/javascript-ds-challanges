function sumOfEvenSquares(arr) {
  if (arr.length === 0) return 0;
  return arr
    .filter((num) => {
      return num % 2 === 0;
    })
    .map((num) => {
      return num * num;
    })
    .reduce((a, b) => {
      return a + b;
    });
}

module.exports = sumOfEvenSquares;
