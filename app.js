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







//
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

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }


// 11 LOOPS 07 PALIDROME

//FUNCION NUMERO 1
// function palindrome(str) {
//   // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//   var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//   // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//   // var lowRegStr = "amanaplanacanalpanama";
     
//   // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//   var reverseStr = lowRegStr.split('').reverse().join(''); 
//   // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//   // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//   // And, var reverseStr = "amanaplanacanalpanama";
   
//   // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//   return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
// }
 
// console.log(palindrome("A man, a plan, a canal. Panama"));


//FUNCION NUMERO 2

// let string = 'racecar';

// function checkPalindrome(string) {


//   const arrayValues = string.split('');   // convert string to an array
//   const reverseArrayValues = arrayValues.reverse(); // reverse the array values
//   const reverseString = reverseArrayValues.join(''); // convert array to string

//   if(string === reverseString) {
//       return "true"
//   }
//   else {
//       return 'false'
//   }
// }

// console.log(checkPalindrome("SOMOS O NO SOMOS"));


//Exercises
let employees = [
  {name: "Jhon", salary: 90000, hireDate: "July 1, 2010"},
  {name: "David", salary: 75000, hireDate: "July 1, 2010"},
  {name: "Ana", salary: 80000, hireDate: "July 1, 2010"}
];

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
// }

//employees.forEach((employee, index) => console.log(employee.name, index)); // lista indexada de los empleados

const highTier = employees.filter(function(employee){
  if(employee.salary > 75000) {
    return true
  } 
})

console.log(employees, highTier);

