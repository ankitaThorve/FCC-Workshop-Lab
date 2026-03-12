// & should be converted to &amp;.
// < should be converted to &lt;.
// > should be converted to &gt;.
// " should be converted to &quot;.
// ' should be converted to &apos;.

function convertHTML(string) {
    let newString = "";
    for (const char of string) {
        if (char === "&") {
            newString += "&amp;";
        } else if (char === "<") {
            newString += "&lt;";
        } else if (char === ">") {
            newString += "&gt;";
        } else if (char === '"') {
            newString += "&quot;";
        } else if (char === "'") {
            newString += "&apos";
        } else {
            newString += char;
        }
    }
    return newString;
}

console.log(convertHTML("Dolce & Gabana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
