function symmetricDifference(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  let diffArr = [];

  for (let num of set1) {
    if (!set2.has(num)) {
      diffArr.push(num);
    }
  }
  for (let num of set2) {
    if (!set1.has(num)) {
      diffArr.push(num);
    }
  }
  return diffArr;
}

module.exports = symmetricDifference;
