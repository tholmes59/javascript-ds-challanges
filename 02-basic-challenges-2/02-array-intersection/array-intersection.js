function arrayIntersection(arr1, arr2) {
  let interArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !interArr.includes(arr1[i])) {
      interArr.push(arr1[i]);
    }
  }

  return interArr;
}

module.exports = arrayIntersection;
