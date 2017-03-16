// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the
// first ten natural numbers and the square of the sum is
// 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the
// first one hundred natural numbers and the square of the sum.

//////////////////////////////////////////////////////////////

// Approach:
// The answer is (1 + 2 + ... + n)^2 - (1^2 + 2^2 + ... + n^2)
// the first term is the sum of ints 1-n, squared,
// which is ( n(n+1)/2 )^2.
// the second term is the sum of the squares of ints 1-n,
// which is n(n+1)(2n+1)/6.

// Thus the answer
// = (n(n+1))^2        /2^2 - n(n+1)(2n+1)      / 6
// = n^2(n^2 + 2n + 1) / 4  - (n^2 + n)(2n+1)   / 6
// = (n^4 + 2n^3 + n^2)/ 4  - (2n^3 + 3n^2 + n) / 6
// = ( 3n^4 + 6n^3 + 3n^2   - (4n^3 + 6n^2 + 2n) )  / 12
// = ( 3n^4 + 2n^3 - 3n^2   - 2n ) / 12
// = (3n^2 + 2n)(n^2 -1) / 12
// = (n-1)(n)(n+1)(3n + 2) /12

function sumSquareDiff(n) {
  return (n - 1) * (n) * (n + 1) * (3 * n + 2) / 12;
}

console.log(sumSquareDiff(100));
