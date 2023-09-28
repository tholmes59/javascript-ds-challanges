function phoneNumberDirectory(arr) {
  let phonenumberArr = arr.map((phoneNum) => {
    return phoneNum.split(":");
  });

  //   console.log(phonenumberArr);
  let phoneMap = new Map(phonenumberArr);
  return phoneMap;
  //   console.log(phoneMap);
}

module.exports = phoneNumberDirectory;
