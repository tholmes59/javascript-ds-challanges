function titleCase(str) {
  let strArr = str.split(" ");
  let finArr = [];
  strArr.forEach((element) => {
    finArr.push(
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    );
  });
  return finArr.join(" ");
}

module.exports = titleCase;
