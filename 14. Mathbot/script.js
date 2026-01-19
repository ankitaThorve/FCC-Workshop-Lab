const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);


//Math.random() -----
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
const randomNum = Math.random();
console.log(randomNum);


//Randon number between two values ---
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

//Math.floor() ----
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

//random integer btw two values ---
console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

