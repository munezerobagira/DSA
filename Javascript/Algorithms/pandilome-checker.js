function palindrome(str) {
  let formattedString = str.replace(/[\W\_]/g, "").toLowerCase();
  let lastIndex = formattedString.length - 1;
  let flag = true;
  for (let counter = 0; counter <= lastIndex; counter++) {
    if (counter == lastIndex - counter) {
      if (formattedString[counter] !== formattedString[lastIndex - counter]) {
        flag = false;
        break;
      }
      break;
    }
    if (counter > lastIndex - counter) {
      break;
    }
    if (formattedString[counter] !== formattedString[lastIndex - counter]) {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(palindrome("race car") == true);
