function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice(); // Step 1: copy arr2
    newArr.splice(n, 0, ...arr1); // Step 2: insert arr1 at index n
    return newArr; // Step 3: return result
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log();


