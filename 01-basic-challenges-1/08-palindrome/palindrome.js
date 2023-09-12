function isPalindrome(str) {
  let revStr = str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");
  let upStr = str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9]/g, "");

  if (upStr === revStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
