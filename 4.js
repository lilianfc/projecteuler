// Largest palindrome product
// Find the largest palindrome made from the product of two 3-digit numbers

var uno=99; length=0;
var dos; result=[];
var palindromo; 

palindromo:
while (uno>1) {
	dos=99;	
	while (dos>1) {
		result = (uno*dos).toString().split("");
		length = result.length;
		palindromo = true;

		for (var i=0; i<length/2; ++i){
			if (result[i] !== result[length-1-i]) {
				palindromo = false;
				break;
			}
		}	
		if (palindromo) {
			break palindromo;
		}
		console.log(result);
		--dos;
	}
	--uno;	
}
console.log("result=" + result.join(''));
console.log("uno=" + uno + ", dos=" + dos);
