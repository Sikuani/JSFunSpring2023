// //LOOPS
// // do while loop
// let contador = 1;

// do {
//   console.log(contador);
//   contador++;
// } while (contador <= 10);

// // // for loop
// for (let contador2 = 8; contador2 >= 1; contador2--) {
//   console.log(contador2);
// }

// //while loop
// let contador3 = 1;

// while (contador3 <= 10) {
//   console.log(contador3);
//   contador3 = contador3++;
// }

// Exercise Function
// let greeting = () => {
//   console.log("Good morning");
// }
// greeting()

// const displayError = (status = "error", message= "entre") => {
//   console.log(status);
//   console.log(message);
// }

// displayError("");

// document.getElementById('username');

//EJERCICIO 10
// const multiplyTen = (num) => {
//   console.log(10 * num);
// };

// let product = multiplyTen(2);

// let sum = product + 5;
// console.log(sum);

//EJERCICIO 11
// for (let i = 0; i < 2; i++) {
//   console.log("You're improving your coding skills");
// }

//08 FUNCTIONS -- INVOKE FUNCTIONS --> Michele Edington
// const calculateTotal = (subtotal, tax) => {
//   return subtotal * tax + subtotal;
// };

// //  - You are paying your bill. You have a subtotal of $50.00 and tax is 2%.
// //  - Create a variable called "total". The variable "total" should be equal to the result of "calculateTotal" (which is 60).
// //  - You will need to pass in arguments to  "calculateTotal".

// const total = calculateTotal(50, 0.02);
// console.log(total);

//08 FUNCTIONS -- PRINT GREETING --> Michele Edigton
// // Create a function named called "printGreeting".
// // - It should accept a "name" as a parameter
// // - and print "Hello ______!" with console.log

// // @param {string} name

// // @example printGreeting("Tim"); // Hello Tim!
// // - You should use arrow syntax.

// const printGreeting = (name) => {
//   console.log(`Hello ${name}!`);}

// printGreeting ("Michele");

//08 FUNCTIONS -- RETURN GREETING --> Kevin Browne
// /**
//  * Create a function named called "returnGreeting".
//  * It should accept a "name" as a parameter
//  * and return "Hello ______!"
//  * (This is similar to the last exercise,
//  * except you are returning a value instead of using console.log)
//  *
//  * @param {string} name
//  * @returns {string} "Hello name"
//  *
//  * @example returnGreeting("Tim"); // Hello Tim!
//  * You should use arrow syntax.
//  */

// // WRITE YOUR ANSWER BELOW THIS LINE --> Kevin Browne
// // const returnGreeting = (name) => `"Hello ${name}`
// // console.log(returnGreeting("Jhon"));

// // const returnGreeting = name => `"Hello ${name}` // Jamal Taylor
// // console.log(returnGreeting("Maria"));

// // const returnGreeting = (name, lastName) => `"Hello ${name}` //Jamal Taylor: two param need a parenthesis
// // console.log(returnGreeting("Douglas"));

//08 FUNCTIONS -- MULTIPLY --> Catherine Felton
// /**
//  * Create a function named "multiply".
//  * It should have two parameters: "num1" and "num2".
//  * Both parameters should be numbers.
//  * The function should return the product of both numbers.
//  * (In other words, multiply!)
//  *
//  * @param {number} num1
//  * @param {number} num2
//  * @returns {number} num1 x num2
//  *
//  * @example timesFive(5); // 25
//  * @example timesFive(2); // 10
//  * @example timesFive(0); // 0
//  * You should use arrow syntax.
//  */

// // WRITE YOUR ANSWER BELOW THIS LINE
// let multiply = (num1, num2) => num1 * num2;

//08 FUNCTIONS -- LOWERCASE --> Erdem Zengin
// /**
//  * Create a function called "lowerCaseString".
//  * If given a string, it should return the string lower cased.
//  * @example lowerCaseString("HELLO WORLD"); // hello world
//  *
//  * If given a value that is not a string, this function should not throw an error.
//  * @see https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
//  * HINT: you will need to exit out of the function early.
//  *
//  * @param {string} str
//  * @returns {string} str capitalized
//  *
//  * @example lowerCaseString(); // undefined (should not throw an error)
//  * @example lowerCaseString(null); // undefined (should not throw an error)
//  * You should use arrow syntax.
//  */

// // WRITE YOUR ANSWER BELOW THIS LINE
// let lowerCaseString = (str) => {
//   if (typeof str !== 'string') {
//     return undefined;
//   }
//   return str.toLowerCase();
// };
// console.log(lowerCaseString("KAROL"));


//08 FUNCTIONS -- COUNT NUMBER OF DIGITS --> Kevin Browne
// /**
//  * Create a function called "countNumberOfDigits".
//  * Given an integer, it should return the number of digits in an integer.
//  *
//  * @param {int} num
//  * @returns {int} the number of digits
//  *
//  * @example countNumberOfDigits(5000); // 4
//  * You should use arrow syntax.
//  */

// // WRITE YOUR ANSWER BELOW THIS LINE
// let countNumberOfDigits = (num) => Math.abs(num).toString().length;

// console.log(countNumberOfDigits(645456));