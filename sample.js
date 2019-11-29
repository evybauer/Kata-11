

const urlEncode = function(text, target, replacement) {
 
  var i = 0, length = text.length;
  for (i; i < length; i++) {
    text = text.replace(" ", "%20");
  }
  return text;
 }

 console.log(urlEncode("I love coding!"));    
 console.log(urlEncode(" I love coding! ")); 


