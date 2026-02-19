function findLongestWordLength(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }
    const words = sentence.trim().split(/\s+/);
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
