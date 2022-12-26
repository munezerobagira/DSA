// Write a function that takes a formatted array. The array is made of a string of people’s identities in a predefined format,
// "first-name second-name, age" . Ex “Patrick wyne, 30"

//[“Patrick wyne, 30", “lil wyne, 32",“Eric mimi, 21",“Dodos deck, 21",“Alian Dwine, 22",“Patrick wyne, 33",“Patrick wyne, 100",“Patrick wyne, 40"]
function stringArrayToObject(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    let [name, age] = array[i].split(",");
    let [fname, sname] = name.split(" ");
    let objectProperty = fname.toLowerCase();
    if (!object[objectProperty]) {
      object[objectProperty] = {
        "second-name": sname,
        age: parseInt(age),
      };
    }
  }
  return object;
}
console.log(
  stringArrayToObject([
    "Patrick wyne, 30",
    "lil wyne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alian Dwine, 22",
    "Patrick wyne, 33",
    "Patrick wyne, 100",
    "Patrick wyne, 40",
  ])
);
