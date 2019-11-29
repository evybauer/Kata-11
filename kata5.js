//Kata 5 - Percent Encoded String

const urlEncode = function(text) {
  textLength = text.length;
  for (var i = 0; i < textLength; i++) {
    text = text.trim().split(" ").join("%20");

  }
   
  return text;
  };

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//https://gist.github.com/evybauer/a2b3445b664f8ca6a38eecb6bc863180