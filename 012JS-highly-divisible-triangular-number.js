// The sequence of triangle numbers is generated by adding the natural
// numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 +
// 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five
// divisors.

// What is the value of the first triangle number to have over five
// hundred divisors?


// Approach:
// naive approach: calculate each triangle number and factor in turn.

// what we know:
// the nth triangle number (t) is the sum from 1 to n, which is n(n+1)/2.
// after n = 2, no triangle number can be prime, by the above equality.
// t can be factored as t = p1^a1 * p2^a2 * ... * pk^ak
// where ps are primes, and as are positive integers.
// so n(n+1)/2 = p1^a1 *...* pk^ak
// so n^2 + n = 2 * p1^a1 *...* pk^ak

// the size of the set of divisors D is (a1+1) * (a2+1) * ... * (ak+1)
// so 500 < (a1+1)*...*(ak+1)

// if no prime factors were repeated, then the as would all equal 1.
// thus, the size k of the set of unique prime factors P is at most the
// smallest k where 2^k > 500. 2^9 = 512.
// thus the number of unique prime factors k is at most 9.
// the product of the first 9 primes {2,3,5,7,11,13,17,19,23} is
// 223,092,870.

// going the other way, if there was only one unique prime factor,
// then 500 < a1+1 => a1 >= 500. 2^500 is ridiculously large.

//        (a+1)s        # divisors  min t with those powers
// 2*2*2 * 2*2*2 * 2*2*2  = 512      223,092,870

// 3*3*2 * 2*2*2 * 2*2    = 576       58,198,140
// 4*2*2 * 2*2*2 * 2*2    = 512       38,798,760

// 3*3*3 * 3*2*2 * 2      = 648      107,207,100
// 4*3*3 * 2*2*2 * 2      = 576       30,630,600
// 4*4*2 * 2*2*2 * 2      = 512       18,378,360
// 6*3*2 * 2*2*2 * 2      = 576       24,504,480

// 4*4*3 * 3*2*2          = 576       37,837,800
// 4*4*4 * 2*2*2          = 512       27,027,000
// 5*4*4 * 2*2*2          = 640       54,054,000


// best guess, the lowest triangle number with 500+ divisors is
// somewhere near 18-30 million.

// if n(n+1)/2 = (roughly) 18Mil, n(n+1) = 36Mil
// n^2 + n - 36Mil = 0
// n = [-1 +/- sqrt(1 + 4*1*36Mil)]/2 = (roughly) 6,000

// the 6000th triangle number is 6000(6001)/2 = 18,003,000

function powersOfPrimes(num, primesArr) {
    var arr = [];
    var sqrt = Math.sqrt(num);
    for (let i = 0; primesArr[i] <= sqrt; i++) {
      if (!(primesArr[i]) {
//TODO
        if()//TODO
        i--;
      }
    }
}

function numDivisors(powersOfPrimesArr) {
  var num = 1;
  powersOfPrimesArr.foreach(pow => {
    num *= (pow + 1)
  });
  return num;
}

function lowestTriNumWNumDivisors(numDivisors) {
  var triNum = 1;
  while(true) {
    if () {}
  }
}

lowestTriNumWNumDivisors(501);
