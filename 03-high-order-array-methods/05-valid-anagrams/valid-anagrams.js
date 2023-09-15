function validAnagrams(str1, str2) {
  let srt1Arr = str1.split("").reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  let srt2Arr = str2.split("").reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  return Object.keys(srt1Arr).every((char) => srt1Arr[char] === srt2Arr[char]);
}

module.exports = validAnagrams;
