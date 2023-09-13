function areAllCharactersUnique(str) {
  if (str.length === 0) return true;

  let strArr = str.split("");
  let removeDupArr = Array.from(new Set(strArr));

  return strArr.length === removeDupArr.length ? true : false;
}

module.exports = areAllCharactersUnique;
