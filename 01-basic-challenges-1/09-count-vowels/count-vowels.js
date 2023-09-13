function countVowels(str) {
  return str.toLowerCase().match(/[aeiouAEIOU]/g).length;
}

module.exports = countVowels;
