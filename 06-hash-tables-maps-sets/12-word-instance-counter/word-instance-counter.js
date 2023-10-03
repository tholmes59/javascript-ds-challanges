const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  let hashTable = new HashTable();

  let lowercaseWordArr = str.toLowerCase().split(/\W+/);
  let lowercaseTargetWord = word.toLowerCase();

  let count = 0;

  for (const currentWord of lowercaseWordArr) {
    if (currentWord === "") continue;

    if (hashTable.has(currentWord)) {
      hashTable.set(currentWord, hashTable.get(currentWord) + 1);
    } else {
      hashTable.set(currentWord, 1);
    }

    if (currentWord === lowercaseTargetWord) {
      count = hashTable.get(currentWord);
    }
  }

  return count;
}

module.exports = wordInstanceCounter;
