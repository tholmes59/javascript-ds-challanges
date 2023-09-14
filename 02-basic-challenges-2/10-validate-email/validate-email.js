function validateEmail(str) {
  return str.match(/(\w+\.)*\w+@(\w+\.)+\w{2,}/) ? true : false;
}

module.exports = validateEmail;
