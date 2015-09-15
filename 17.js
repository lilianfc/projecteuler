// Number letter counts
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? 
var one="one", two="two", three="three", four="four", five="five";
var six="six", seven="seven", eight="eight", nine="nine";
var twenty="twenty", thirty="thirty", forty="forty", fifty="fifty";
var sixty="sixty", seventy="seventy", eighty="eighty", ninety="ninety";
var hundred="hundred", thousand="thousand";
var sum=0;

for (var i=1; i<21; ++i) {
	if (i<11) {
		switch(i) {
			case 1: sum += one.length;
				break;
			case 2: sum += two.length;
				break;
			case 3: sum += three.length;
				break;
			case 4: sum += four.length;
				break;
			case 5: sum += five.length;
				break;
			case 6: sum += six.length;
				break;
			case 7: sum += seven.length;
				break;
			case 8: sum += eight.length;
				break;
			case 9: sum += nine.length;
				break;
			case 10: sum += "ten".length;
				break;
		}
	} else if (i<20) {
		switch(i) {
			case 11: 
				sum += "eleven".length;
				break;
			case 12: sum += "twelve".length;
				break;
			case 13: sum += "thirteen".length;
				break;
			case 14: sum += four.length + "teen".length;
				break;
			case 15: sum += five.length +"teen".length;
				break;
			case 16: sum += six.length + "teen".length;
				break;
			case 17: sum += seven.legth + "teen".length;
				break;
			case 18: sum += eight.length + "teen".length;
				break;
			case 19: sum += nine.length + "teen".length;
				break;
		}	
				console.log(sum);
	}
}

console.log(sum);
