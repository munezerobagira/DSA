// Roman calculator up to 3,999,999
const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  _V: 5000,
  _V: 10000,
  _L: 50000,
  _C: 100000,
  _D: 500000,
  _M: 1000000,
};

// convert a number to Roman
function romanHelper(l1, l2, l3, n) {
  let result = "";
  if (n <= 3) {
    for (let nletter = 1; nletter <= n; nletter++) {
      result += l1;
    }
    return result;
  }
  if (n <= 5) {
    for (let nletter = 5; nletter > n; nletter--) {
      result += l1;
    }
    return result + l2;
  }
  if (n <= 8) {
    for (let nletter = 6; nletter <= n; nletter++) {
      result += l1;
    }
    return l2 + result;
  } else {
    for (let nletter = 10; nletter > n; nletter--) {
      result += l1;
    }
    return result + l3;
  }
}
function toRoman(n) {
  let len = n.toString().length;
  switch (len) {
    case 1:
      return romanHelper("I", "V", "X", n);
    case 2:
      return romanHelper("X", "L", "C", parseInt(n / 10));
    case 3:
      return romanHelper("C", "D", "M", parseInt(n / 100));
    case 4:
      return romanHelper("M", "_V", "_X", parseInt(n / 1000));
    case 5:
      return romanHelper("_X", "_L", "_C", parseInt(n / 10000));
    case 6:
      return romanHelper("_C", "_D", "_M", parseInt(n / 100000));
    case 7:
      return romanHelper("_M", "limit", "limit", parseInt(n / 1000000));
  }
  console.log(len);
}
function convertToRoman(num) {
  let romanNumbers = [];
  let counter = 0;
  while (num != 0) {
    if (counter != 0)
      romanNumbers.push(toRoman((num % 10) * Math.pow(10, counter)));
    else romanNumbers.push(toRoman(num % 10));
    counter++;
    num = parseInt(num / 10);
  }
  return romanNumbers.reverse().join("");
}

console.log(convertToRoman(3999999) === "_M_M_M_C_M_X_CM_XCMXCIX");
console.log(convertToRoman(3999) === "MMMCMXCIX");
console.log(convertToRoman(3) === "III");
console.log(convertToRoman(212) === "III");
