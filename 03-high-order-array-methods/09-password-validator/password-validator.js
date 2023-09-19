function validatePassword(str) {
  if (!str.length >= 8) return false;

  let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)");

  if (!pattern.test(str)) return false;

  return true;
}

module.exports = validatePassword;
