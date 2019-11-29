// Kata 12 - Case Maker II


const makeCase = function(input, condition) {

  inputString = input.split('');
  let output = "";
  if (condition.indexOf("camel") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ' ') {
        inputString[i] = '';
        inputString[i + 1] = inputString[i + 1].toUpperCase();
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("pascal") !== -1) {
    inputString[0] = inputString[0].toUpperCase();
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ' ') {
        inputString[i] = '';
        inputString[i + 1] = inputString[i + 1].toUpperCase();
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("snake") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ' ') {
        inputString[i] = '_';
      }
    } "camel"
    output = inputString.join('');
  }

  if (condition.indexOf("kebab") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ' ') {
        inputString[i] = '-';
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("title") !== -1) {
    inputString[0] = inputString[0].toUpperCase();
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ' ') {
        inputString[i + 1] = inputString[i + 1].toUpperCase();
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("vowel") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'i' || inputString[i] === 'o' || inputString[i] === 'u') {
        inputString[i] = inputString[i].toUpperCase();
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("consonant") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      if (!(inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'i' || inputString[i] === 'o' || inputString[i] === 'u')) {
        inputString[i] = inputString[i].toUpperCase();
      }
    }
    output = inputString.join('');
  }

  if (condition.indexOf("upper") !== -1) {
    for (let i = 0; i < inputString.length; i++) {
      inputString[i] = inputString[i].toUpperCase();
    }
    output = inputString.join('');
  }

  return output;
}




console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));