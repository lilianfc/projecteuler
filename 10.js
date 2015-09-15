// Summation of primes
// Find the sum of all the primes below two million.

var primes = [];
var fact = 2;
var sum, prime;

prime:
//while (primes.length < 20000) {
while (fact < 200000) {
        while (fact%2 === 0 && fact!=2) { 
		++fact;
		continue prime;
        }
	prime = true;
        for (i in primes) {
                //console.log(primes[i]);
                if (fact%i === 0) {
			prime = false;
			++fact;
			continue prime;
                }
        }
	
	if (prime) {
		primes.push(fact);
		console.log("prime=" + fact);
	}
	++fact;
}

console.log(primes);
