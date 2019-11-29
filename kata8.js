// Kata 8 - Multiplication Table

const multiplicationTable = function(maxValue) {
var array = []
for (var i = 1; i <= maxValue; i++) {
  var result = []
  for (var x = 1; x <= maxValue; x++) {
    result.push(x * i)
  }
  array.push(result)
}
return array
}

multiplicationTable(3).forEach(x => console.log(x.join(" ")));

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


//https://gist.github.com/evybauer/4d339bd3ed90f0c6099cb87a60a1a77c