const readline = require('readline-sync');

console.log("Welcome to the JavaScript quiz.\n");

let firstName = readline.question("What is your name? ");
console.log("Welcome, " + firstName + ". Good luck!\n");

let userInput = readline.questionInt("How many data types are there in JavaScript? ");
if (userInput === 8) {
    console.log("Correct! There are 8 data types are there in JavaScript.\n");
} else {
    console.log("Close! There are 8 data types are there in JavaScript.\n");
}

userInput = readline.question("What is one example of a complex data type? ");
console.log("You answered " + userInput + ".\n");

userInput = readline.question("What is the variable naming convention which stipulates that variable names start with a lowercase letter and capitalize each internal word? ");
console.log("You answered " + userInput + ".\n");

userInput = readline.question("What is another name for type coercion in JavaScript? ");
console.log("You answered " + userInput + ".\n");

userInput = readline.question("What is one JavaScript module that collects input from the user? ");
console.log("You answered " + userInput + ".\n");

console.log("Thank you for taking this JavaScript quiz! Have a great day.");