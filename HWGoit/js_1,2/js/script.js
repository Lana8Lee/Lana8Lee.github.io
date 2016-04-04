

function pow(a, b) {
  var result = a;

  for (var i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

var a = prompt("Enter your number", '');
var b = prompt("Enter your exponent", '');

if (b <= 1) {
  alert("These aren't the" + b + "your looking for.." 
  
  );
} else {
  alert( pow(a, b) );
}
