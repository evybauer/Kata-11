// Kata 2 - Conditional sums

const conditionalSum = function(values, condition) {
  var sum = 0;
  values.forEach( function(number) {
    if(condition == "even" && number % 2 === 0) {
      sum += number;
    } else if (condition == 'odd' && number % 2 !== 0) {
      sum +=number;
    }
    else 
      return 0;
  });
  return sum;

};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//https://gist.github.com/evybauer/837216e9ca35365ae0b8e2c6daebb417