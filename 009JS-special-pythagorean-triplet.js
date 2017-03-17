// A Pythagorean triplet is a set of three natural numbers,
// a < b < c, for which a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which
// a + b + c = 1000. Find the product abc.

////////////////////////////////////////////////////////

// Approach:
// we want x = a*b*c, where
// 0 < a < b < c      and
// a^2 + b^2 = c^2    and
// a + b + c = 1000   ;

function specialPythagoreanTriple() {
  for (let a = 0; a < 333; a++) {
    for (let b = a + 1; b < 500; b++) {
      let c = 1000 - a - b;
      if (a * a + b * b === c * c) {
        console.log("Found:", a, b, c);
        return a * b * c;
      }
    }
  }
  return "Not Found";
}

console.log(specialPythagoreanTriple())
