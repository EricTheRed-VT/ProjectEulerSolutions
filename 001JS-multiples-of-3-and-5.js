// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

//////////////////////////////////////////////////////////

// Approach:
// 3 times the sum of all x from 1 - 1000/3,
// plus 5 times the sum of all y from 1 - 1000/5,
// minus 15 times sum of all z from 1 - 1000/15 (remove duplication)

// sum from 1 - N = N*(N+1)/2
// thus:
// (3 * 333 * 334 / 2)+(5 * 199 * 200 / 2)-(15 * 66 * 67 / 2)
// = (999 * 167)+(99500)-(495 * 67)
// = 166833 + 99500 - 33165
// = 233168

function sumMultiplesOfThreeAndFive(cap) {
  const sumMultofThree = 3 * ~~(cap / 3) * (~~(cap / 3) + 1) / 2;
  const sumMultofFive = 5 * ~~(cap / 5) * (~~(cap / 5) + 1) / 2;
  const sumMultofFifteen = 15 * ~~(cap / 15) * (~~(cap / 15) + 1) / 2;

  let totalSum = sumMultofThree + sumMultofFive - sumMultofFifteen;
  // We want sum to not include cap, even if it's a multiple
  if (!(cap % 3) || !(cap % 5)) {
    totalSum -= cap;
  }

  return totalSum;
}

console.log(sumMultiplesOfThreeAndFive(1000));
