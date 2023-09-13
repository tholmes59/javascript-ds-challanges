function findMissingNumber(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let nVal = sortArr.length + 1;
  let sumOfNum = (nVal * (nVal + 1)) / 2;
  let sumOfVal = sortArr.reduce((a, b) => a + b);
  return sumOfNum - sumOfVal;
}

module.exports = findMissingNumber;
