var number = Math.pow(2, 1000);
var numString = number.toString();
var sum = 0;
console.log(numString[0]);
console.log(number.toFixed(3));
for (var i=0; i<numString.length; ++i) {
	sum += parseFloat(numString[i]);
}

console.log(sum);
