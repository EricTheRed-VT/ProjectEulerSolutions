// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

//////////////////////////////////////////////////////

// Approach:
// Once again, eratosthenes to the rescue.

function primeSieve(cap) {
  const numbers = Array(cap).fill(true);
  let primes = [];

  for (let i = 2; i <= numbers.length; i++) {
    if (numbers[i]) {
      primes.push(i);
      for (let j = i * i; j <= numbers.length; j += i) {
        numbers[j] = false;
      }
    }
  }
  return primes;
}

function sumPrimes(cap) {
  return primeSieve(cap).reduce((acc, val) => acc + val, 0);
}

console.log(sumPrimes(2000000));
