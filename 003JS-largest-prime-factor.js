// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of
// the number 600851475143 ?

////////////////////////////////////////

// Approach:
// starting with the lowest, divide n by all primes < squareroot(n)
// if n is divisible by a prime p, n = n / p and continue.
// stop and return n when p > sqrt(n).

// If we find no factors up to and including the square
// root, then n is prime, and is its own largest (and only)
// prime factor.

// We will first use a sieve of eratosthenes to find the set
// of primes <= sqroot(n)

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

function largestPrimeFactor(number) {
  const primes = primeSieve(~~Math.sqrt(number));
  for (var i = 0; i < primes.length; i++) {
    console.log("I is ", primes[i])
    const x = number / primes[i];
    console.log("X is", x)
    if (x % 1 === 0) {
      return x;
    }
  }
}


console.log(largestPrimeFactor(10086647))
