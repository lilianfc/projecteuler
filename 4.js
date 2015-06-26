// Largest palindrome product
// Find the largest palindrome made from the product of two 3-digit numbers

var length=0; max = 0;
var result=[]; valor=0; 
var palindromo; 

//palindromo:
for (var uno=999; uno>0; --uno) {
	for (var dos=999; dos>0; --dos) {
		palindromo = true;
		valor = uno*dos;
		result = valor.toString().split("");
		length = result.length;

		for (var i=0; i<length/2; ++i){
			if (result[i] !== result[length-1-i]) {
				palindromo = false;
				break;
			}
		}	
		if (palindromo) {
			if (valor > max) {
				max = valor;
			}
		}
	}
}
	
console.log(max);
