// Even Fibonacci numbers
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms
var next = 5; even = 2; temp = 0;

for (x=3; x<4000000;) {
	if (next%2 === 0) {
		even += next;
	}
	temp = next + x;
	x = next;
	next = temp;
}

console.log(even);