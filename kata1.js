
//Kata 1 - Sum the Largest Numbers


let sumLargestNumbers = function(data) {
  let numbers = data.sort(function(a, b) {
    return b - a;
  });

  return numbers[0] + numbers [1];


};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//https://gist.github.com/evybauer/b59e24c26bbdefc70ebcad20364106d6