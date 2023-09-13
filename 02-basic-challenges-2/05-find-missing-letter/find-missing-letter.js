function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let startInx = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startInx + i]) {
      return alphabet[startInx + i];
    }
  }
}

module.exports = findMissingLetter;
