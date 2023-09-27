function wordFrequencyCounter(str) {
  const noPeriod = str.toLowerCase().split(/\W+/);

  const wordMap = new Map();

  for (const word of noPeriod) {
    if (word === "") continue;

    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }

  return wordMap;
}

module.exports = wordFrequencyCounter;
