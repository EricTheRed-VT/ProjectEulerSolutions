// A palindromic number reads the same both ways. The largest
// palindrome made from the product of two 2-digit numbers
// is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two
// 3-digit numbers.

//////////////////////////////////////////////////////////

// Approach:
// It is much more efficient to form palindromes and factor
// them, than to repetitively multiply and check if the
// result is a palindrome.

// Any product of two 3-digit numbers will be between 10,000
// (100 * 100) and 998,001 (999 * 999). Thus, it will have 5
// or 6 digits (probably 6).

// For a number to be a palindrome, the first and last digit
// must be the same, the second and next to last must be the
// same, etc. so we are looking for a number of the form
// 'abccba', where a can be any digit 1-9 (probably high)
// and b and c can be any digit 0-9.

function highFactor(number, factorDigits) {
  let start = '';
  for (var i = 0; i < factorDigits; i++) {
    start += '9'
  }
  start = 0 + start;

  for (var i = start; i > Math.sqrt(number); i--) {
    const factor = number / i;
    if (factor % 1 === 0) return factor;
  }
  return 0;
}

function largestPalindromeProductOfThreeDigitNumbers() {
  for (var i = 9; i > 0; i--) {
    for (var j = 9; j >= 0; j--) {
      for (var k = 9; k >= 0; k--) {
        const palindrome = '' + i + j + k + k + j + i;

        const factor = highFactor(palindrome, 3);
        if (factor) {
          console.log("palindrome: ", palindrome);
          console.log("factors: ", factor,
            " x ", palindrome / factor);

          return palindrome;
        }
      }
    }
  }
}

largestPalindromeProductOfThreeDigitNumbers();
