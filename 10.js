// Summation of primes
// Find the sum of all the primes below two million.

var primes = [];
var suma = 1;
var prime;
var cont = 1;

fact:
for (var i=2; i<2000000; ++i) {
	if (i%2 === 0 && i!=2) { 
		continue;
	}
	for (j in primes) {
		//console.log(primes[j]);
		if (i%primes[j] === 0) {
			continue fact;
		}
	}
	if (i<2000) {
	primes.push(i);
	}
	suma += i;
	//++cont;
	console.log(i + ", suma=" + suma);
}

//console.log("primes=" + primes);
console.log("suma=" + suma);
