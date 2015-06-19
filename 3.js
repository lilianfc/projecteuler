// Largest prime factor
// What is the largest prime factor of the number 600851475143

var number=600851475143;
var fact = 2;
var factors = [];

for (fact; Math.round(Math.sqrt(number)); fact++) {	
	if (number < fact) {
		break;
	}
	if (fact%2 === 0) { 
		continue;
	}
	if (number%fact === 0) {
		factors.push(fact);
		while (number%fact === 0){
			number /= fact;
		}
	}
}
//console.log("factors=" + factors);
console.log(Math.max.apply(null, factors));
