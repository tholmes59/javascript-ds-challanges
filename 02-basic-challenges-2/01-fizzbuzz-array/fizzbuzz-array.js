function fizzBuzzArray(num) {
  let finArr = [];
  for (let i = 1; i < num + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      finArr.push("Buzz");
    } else if (i % 3 === 0) {
      finArr.push("Fizz");
    } else {
      finArr.push(i);
    }
  }
  return finArr;
}

module.exports = fizzBuzzArray;
