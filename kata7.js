// Kata 7 - Case Maker

let camelCase = function(input) {
  let myArray = input.split(" ");
  let capitalLetter;
  const newArray = [];
 
  myArray.forEach(element => {
    if (newArray.length === 0 ) {
      newArray.push(element);
    } else {
      capitalLetter = element.charAt(0).toUpperCase() + element.slice(1);
      newArray.push(capitalLetter);
    }
  });
 
  return newArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//https://web.compass.lighthouselabs.ca/activities/648