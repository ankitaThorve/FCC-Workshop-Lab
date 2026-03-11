function pairElement(str) {
    let pair = [];
    for (const base of str) {
        if (base === "A") {
            pair.push(["A", "T"]);
        } else if (base === "T") {
            pair.push(["T", "A"]);
        } else if (base === "C") {
            pair.push(["C", "G"]);
        } else if (base === "G") {
            pair.push(["G", "C"]);
        }
    }
    return pair;
}
