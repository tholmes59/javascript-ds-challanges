function phoneNumberDirectory(arr) {
  let phonenumberArr = arr.map((phoneNum) => {
    return phoneNum.split(":");
  });

  let phoneMap = new Map(phonenumberArr);
  return phoneMap;
}

module.exports = phoneNumberDirectory;
