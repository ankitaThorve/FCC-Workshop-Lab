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
}

