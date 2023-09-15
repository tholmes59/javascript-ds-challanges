function highestScoringWord(str) {
  let wordArr = str.split(" ");

  let splitWord = wordArr.map((word) => {
    return word
      .split("")
      .reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
  });
  console.log(splitWord);

  const highestScore = Math.max(...splitWord);
  const highestIndex = splitWord.indexOf(highestScore);

  return wordArr[highestIndex];
}

module.exports = highestScoringWord;
