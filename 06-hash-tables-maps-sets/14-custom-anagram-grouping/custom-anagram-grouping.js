const HashTable = require("./HashTable");

function anagramGrouping(arr) {
  let wordHashTable = new HashTable();

  for (let i = 0; i < arr.length; i++) {
    let sortWord = arr[i].split("").sort().join("");
    if (wordHashTable.get(sortWord)) {
      wordHashTable.get(sortWord).push(arr[i]);
    } else {
      wordHashTable.set(sortWord, [arr[i]]);
    }
  }

  return wordHashTable.getValues();
}

module.exports = anagramGrouping;
