function flattenArray(arr) {
  let flatArr = arr.flat();
  if (flatArr.length === arr.length) return flatArr;
  return flattenArray(flatArr);
}

module.exports = flattenArray;
