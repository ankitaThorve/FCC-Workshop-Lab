// Function to calculate the Greatest Common Divisor (GCD) using the Euclidean algorithm

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate the Least Common Multiple (LCM) of two numbers
function lcm(a, b) {
    // Use BigInt for potentially large numbers to prevent overflow
    return (a * b) / gcd(a, b);
}

// Function to find the smallest common multiple for a range of numbers

function smallestCommons(arr) {
    // Determine the minimum and maximum values in the input array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Create an array containing all numbers in the range [min, max]
    const range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    // Use the reduce method to iteratively calculate the LCM of all numbers in the range
    // The initial value for reduce is the first element of the range
    return Number(range.reduce(lcm));
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
