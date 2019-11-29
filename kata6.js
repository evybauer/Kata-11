//Kata 6 - Repeating Numbers

let repeatNumbers = function(data) {
  var result = [];
  for ( var i = 0; i < data.length; i++){
    var a = data[i][0];
    var b = data[i][1];
    for(var x = b; x > 0; x--){
      result += a;
      if(x === 1 && i < data.length-1){
      result += ', ';
      }   
    }
  var array = [];
  array.push(result);
  }
return array;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));