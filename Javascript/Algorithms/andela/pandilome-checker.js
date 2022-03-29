// Write a function that takes a string and returns true/false based on whether it is a palindrome or not (you can use a dictionary to know what a palyndrom is).
function palindrome(str) {
  let formattedString = str.replace(/[\W\_]/g, "").toLowerCase();
  let lastIndex = formattedString.length - 1;
  let flag = true;
  for (let counter = 0; counter < formattedString.length / 2; counter++) {
    if (
      formattedString[counter] !==
      formattedString[formattedString.length - 1 - counter]
    ) {
      flag = false;
      break;
    }
  }
  return flag;
}

console.assert(palindrome("race car") == true);
console.assert(palindrome("Madam I'm Adam") == true);
console.assert(palindrome("Eve") == true);
console.assert(palindrome("this one") == false);
