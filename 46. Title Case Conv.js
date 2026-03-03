function titleCase(string) {
    return string
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

const sentence = titleCase("I love code");
console.log(sentence)