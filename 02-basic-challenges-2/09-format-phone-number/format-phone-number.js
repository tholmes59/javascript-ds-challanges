function formatPhoneNumber(arr) {
  let firstPar = "(";
  let secondPar = ")";

  let areaCode = arr.slice(0, 3).join("");
  let middleNum = arr.slice(3, 6).join("");
  let endNum = arr.slice(6).join("");

  return firstPar + areaCode + secondPar + " " + middleNum + "-" + endNum;
}

module.exports = formatPhoneNumber;
