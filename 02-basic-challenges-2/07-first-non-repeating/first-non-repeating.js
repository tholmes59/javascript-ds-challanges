function findFirstNonRepeatingCharacter(str) {
  let charObj = {};

  for (let i = 0; i < str.length; i++) {
    charObj[str[i]] = (charObj[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
