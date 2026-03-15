function sumPrimes(num) {
    if (num < 2) return 0;

    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    return [...Array(num + 1).keys()]
        .slice(2)
        .filter(isPrime)
        .reduce((sum, curr) => sum + curr, 0);

    //   let sum = 0;

    //   for (let i = 2; i <= num; i++) {
    //     if (isPrime(i)) {
    //       sum += i;
    //     }
    //   }

    //   return sum;
}


console.log(sumPrimes(10))
console.log(sumPrimes(5))
console.log(sumPrimes(2))
console.log(sumPrimes(0))
console.log(sumPrimes(977))
