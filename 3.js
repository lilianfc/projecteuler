// Largest prime factor
// What is the largest prime factor of the number 600851475143

var number=600851475143;
var primes = [];
var fact = 2;
var factors = [];

fact:
for (fact; Math.round(Math.sqrt(number)); fact++) {	
	if (number < fact) {
		break;
	}
	if (fact%2 === 0 && fact!=2) { 
		continue;
	}
	for (i in primes) {
		//console.log(primes[i]);
		if (fact%primes[i] === 0) {
			continue fact;
		}
	}
	if (number%fact === 0) {
		factors.push(fact);
		//console.log("factor=" +fact);
		while (number%fact === 0) {
			number /= fact;
		}
	} else {
		//console.log("prime=" +fact);
		primes.push(fact);
	}
}
//console.log("factors=" + factors);
//console.log("primes=" + primes);
console.log(Math.max.apply(null, factors));
