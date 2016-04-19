
function pow(a, b) {
    var result = a;
    var c;

    for (var i = 1; i < b; i++) {
    	result = result * a;
        
    };
    if(b > 0){
         return result;
    };
    
   if (b == 0) {
        return 1;
    };
   
 
if (b < 0) {
     c = +b * (-1);
    for(var j = 1; j < c; j++){
        
        result = result * a;
    };
    return 1 / result;
};
  
     
    
      
    

};

    	
var a = prompt("Enter your number", '');
var b = prompt("Enter your exponent", '');




   if (a % 1 == 0 && (b % 1 == 0)) {
       alert ( pow(a, b) );

}
    else {
        alert ("Enter an integer");
    }
	

    
    
    
    
    
    
    
    
    
    
    




