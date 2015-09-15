// Power digit sum
// What is the sum of the digits of the number 21000?

var number = Math.pow(2, 1000);
var numString = parseFloat(number);
var sum = 0;
console.log(numString[0]);
console.log(number.toFixed(3));
for (var i=0; i<numString.length; ++i) {
	sum += parseFloat(numString[i]);
}

console.log(sum);
