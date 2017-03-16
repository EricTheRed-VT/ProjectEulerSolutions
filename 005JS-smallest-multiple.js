// 2520 is the smallest number that can be divided by each of
// the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

////////////////////////////////////////////////////

// Approach:
// We are looking for the least common multiple of a set
// of numbers. the LCM of two numbers x and y is
// LCM(x,y) = (x/GCD(x,y)) * (y/GCD(x,y)) * GCD(x,y)
//          = x * y / GCD(x,y).

// Thus: Increment starting with i = 1, multiply an accumulator
// 'a' by i / GCD(a, i). return a when i = 20.

function GCD(a, b) {
  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}


function LCMOfUpTo(cap, incr = 1, acc = 1) {
  if (incr > cap) {
    console.log(acc);
    return acc;
  }

  acc *= incr / GCD(acc, incr);
  incr++;
  return LCMOfUpTo(cap, incr, acc);
}

LCMOfUpTo(20);
