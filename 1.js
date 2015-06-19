// Multiples of 3 and 5
// Find the sum of all the multiples of 3 or 5 below 1000.

var suma = 0;

for (i=3; i<1000; ++i) {
	if (i%3 === 0 || i%5 === 0) {
		suma += i;
	}
}

console.log(suma);
