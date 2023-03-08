/**
 * Create a function named called "printGreeting".
 * It should accept a "name" as a parameter
 * and print "Hello ______!" with console.log
 *
 * @param {string} name
 *
 * @example printGreeting("Tim"); // Hello Tim!
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

function printGreeting() {
  let name = prompt('What is your name?');
  console.log('Hello ' + name);
}

printGreeting();
