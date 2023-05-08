function isPrime(num) {
   
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function primeX(n) {
   
    let primes = [];
    let num = 2;
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  }
  
 
  console.log(primeX(10)); 
  