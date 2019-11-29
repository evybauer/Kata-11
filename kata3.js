// Kata 3 - Vowels


let numberOfVowels = function(data) {

  let vowels = 0;

  for (var i = 0; i < data.length; i++) {
    if(data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowels++;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

//https://gist.github.com/evybauer/4beee4ab60b9392740842c5ad7f0a9f4