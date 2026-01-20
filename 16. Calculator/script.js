//Regular function
function addTwoAndSeven() {
  return 2 + 7;
}
console.log(addTwoAndSeven());

//Another regular function
function addThreeAndFour() {
  return 3 + 4;
}
console.log(addThreeAndFour());

//functions can be called with different arguments
function calculateSum(num1, num2) { //function definition
  return num1 + num2;
}

//function calls
console.log(calculateSum(2,5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

//subtract two numbers
function calculateDifference(num1, num2){
  return num1 - num2;
}

console.log(calculateDifference(22,5));
console.log(calculateDifference(12,1));
console.log(calculateDifference(17,9));

//multiplication of two numbers
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

//division functionality
function calculateQuotient(num1, num2){
  return num1 / num2;
}

console.log(calculateQuotient(7,11));
console.log(calculateQuotient(3,0)); //Infinity