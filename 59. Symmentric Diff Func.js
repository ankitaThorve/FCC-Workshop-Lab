function diffArray(arr1, arr2) {
    const uniqueArr1 = arr1.filter((el) => !arr2.includes(el));
    const uniqueArr2 = arr2.filter((el) => !arr1.includes(el));
    return uniqueArr1.concat(uniqueArr2);
}

console.log(
    diffArray(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"],
    ),
);
console.log(
    diffArray(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["andesite", "grass", "dirt", "dead shrub"],
    ),
);
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log(
    diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]),
);
console.log(
    diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]),
);
console.log(diffArray([], ["apple", "banana"]) );
console.log(diffArray(["apple", "banana"], []));
console.log(diffArray([], []));
