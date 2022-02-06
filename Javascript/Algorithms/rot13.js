// Ceasar cipher
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const mapper = {};
for (let counter = 0; counter < 13; counter++) {
  mapper[letters[counter]] = letters[13 + counter];
  mapper[letters[13 + counter]] = letters[counter];
}
function rot13(str) {
  return str
    .split("")
    .map((character) => {
      if (/[A-Z]/.test(character)) return mapper[character];
      return character;
    })
    .join("");
}

console.log(rot13("SERR CVMMN!") == "FREE PIZZA!");
