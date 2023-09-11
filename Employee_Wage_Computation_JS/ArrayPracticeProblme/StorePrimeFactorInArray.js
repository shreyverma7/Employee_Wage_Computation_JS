//Problem 3
function primeFactors(n) {
    const factors = [];
    // Divide n by 2 until it is odd
    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
    // n must be odd at this point, so we skip even numbers
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    // If n is a prime greater than 2, add it to the factors array
    if (n > 2) {
      factors.push(n);
    }
    return factors;
  }
  const n = 60; // Change this to your desired number
  const primeFactorsArray = primeFactors(n);
  console.log(`Prime Factors of ${n}:`, primeFactorsArray);
  console.log("------PROBLEM 3----------");
  