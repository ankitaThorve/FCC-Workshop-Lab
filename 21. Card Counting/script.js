// Global variable
let count = 0;

function cardCounter(card) {
  // Increase count for low cards
  if (card >= 2 && card <= 6) {
    count++;
  } // Decrease count for high cards
  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }
  // Cards 7, 8, 9 do not affect the count
  return count > 0 ? count + " Bet" : count + " Hold"; // Decide action
}

console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6));
console.log(cardCounter(7));
console.log(cardCounter(8));
console.log(cardCounter(9));
console.log(cardCounter(10));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
console.log(cardCounter("K"));
console.log(cardCounter("A"));
