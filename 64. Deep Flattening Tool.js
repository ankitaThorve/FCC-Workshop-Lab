function steamrollArray(arr) {
    let flattened = [];

    // Helper function to recursively flatten the array
    function flatten(items) {
        for (let i = 0; i < items.length; i++) {
            if (Array.isArray(items[i])) {
                // If it's an array, call flatten recursively
                flatten(items[i]);
            } else {
                // If it's not an array, push to the final array
                flattened.push(items[i]);
            }
        }
    }
    // Initial call
    flatten(arr);
    return flattened;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
