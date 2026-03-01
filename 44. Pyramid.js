//    o   ← 3 spaces, 1 char
//   ooo  ← 2 spaces, 3 chars
//  ooooo ← 1 space , 5 chars
// ooooooo← 0 spaces, 7 chars

function pyramid(char, rows, inverted) {
    let result = "\n";
    if (!inverted) {
        // Normal pyramid (vertex up)
        for (let i = 0; i < rows; i++) {
            let spaces = " ".repeat(rows - i - 1); //When i = 0 → 4 - 0 - 1 = 3
            // When i = 3 → 4 - 3 - 1 = 0
            let chars = char.repeat(2 * i + 1); //i = 0 → 1, i = 1 → 3, i = 2 → 5, i = 3 → 7
            result += spaces + chars + "\n";
        }
    } else {
        // Inverted pyramid (vertex down)
        for (let i = rows - 1; i >= 0; i--) {
            //reverse the order of i
            let spaces = " ".repeat(rows - i - 1);
            let chars = char.repeat(2 * i + 1);
            result += spaces + chars + "\n";
        }
    }
    return result;
}

console.log(pyramid("*", 4, true));
console.log(pyramid("*", 5, false));
console.log(pyramid("p", 5, true));
