// smallest multiple
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var multiple = 20;
var bingo;

while (1) {
	for (var i=2; i<21; i++) {
		if (multiple%i !== 0) {
			bingo=false;
			break;
		}	
	}
	if (bingo) {
		break;
	}
	++multiple;
	bingo=true;
}

console.log(multiple);
