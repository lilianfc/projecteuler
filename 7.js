// 10001st prime
// What is the 10 001st prime number?

var cont = 2; i=3;
var primes = [2]; 
var prime;

prime:
while (cont<10002) {
//console.log("cont=" + cont + ", i=" + i); 
        if (i%2 === 0 && i!=2) {
		++i;
                continue;
        }

	prime = true;
        for (j in primes) {
 //               console.log("primes.j=" + primes[j]);
                if (i%primes[j] === 0) {
			prime = false;
			++i;
                        continue prime;
                }
        }

	if (prime) {
		primes.push(i);
		++cont;
	}
	++i;
}

console.log(primes[primes.length-1]);
