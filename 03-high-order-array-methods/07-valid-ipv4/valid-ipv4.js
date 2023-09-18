const isValidIPv4 = (str) => {
  let arr = str.split(".");

  if (arr.length !== 4) return false;

  let thrshold = (val) => +val.split("")[0] !== 0 && +val >= 0 && +val <= 255;

  return arr.every(thrshold);
};

module.exports = isValidIPv4;
