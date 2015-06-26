// Special Pythagorean triplet
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc

triplet:
for (var a=1; a<1000; ++a) {
	for (var b=1; b<1000; ++b) {
		c = Math.sqrt(a*a + b*b);
		if (c+a+b===1000) {
			break triplet;
		}
	}
}
console.log("a=" + a + ", b=" + b + ", c=" + c);
console.log(a*b*c);
