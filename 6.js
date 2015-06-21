// Sum square difference
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sum = 0; sumsq = 0;

for (var i=1; i<101; ++i) {
	sum += i;
	sumsq += Math.pow(i, 2);
}

var res = Math.pow(sum, 2) - sumsq;

console.log(res);
