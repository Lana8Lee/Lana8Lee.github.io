

function pow(a, b) {
        var result = a;

    for (var i = 1; i < b; i++) {
    	result *= a;
    }

    	return result;
}

var a = prompt("Enter your number", '');
var b = prompt("Enter your exponent", '');

   if (a % 1 == 0 && (b % 1 == 0)) {
       alert ( pow(a, b) );

} else {
	alert ("Enter an integer");
} 
    
    
    
    
    
    
    
    
    
    
    




