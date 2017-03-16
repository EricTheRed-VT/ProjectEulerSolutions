// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

//////////////////////////////////////////////////

// Approach:
// Pretty brute-force, but the best I can think of is to
// find the first 10001 primes with a sieve of eratosthenes.

function primeSieve(cap) {
  const numbers = Array(cap).fill(true);
  let primes = [];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i]) {
      primes.push(i);
      for (let j = i * i; j < numbers.length; j += i) {
        numbers[j] = false;
      }
    }
  }

  return primes;
}

// kept adding 9s until the answer was defined
console.log(primeSieve(999999)[10000])
