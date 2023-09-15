function generateHashtag(str) {
  if (str.length > 140 || str.length === 0) return false;

  let strArr = str.split(" ").map((word) => {
    let cap = word.charAt(0).toUpperCase() + word.slice(1);
    return cap;
  });

  strArr.unshift("#");
  return strArr.join("");
}

module.exports = generateHashtag;
