/**
 * Create a function named called "returnGreeting".
 * It should accept a "name" as a parameter
 * and return "Hello ______!"
 * (This is similar to the last exercise,
 * except you are returning a value instead of using console.log)
 *
 * @param {string} name
 * @returns {string} "Hello name"
 *
 * @example returnGreeting("Tim"); // Hello Tim!
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
function returnGreeting() {
  let name = prompt('What is your name?');
  return 'Hello ' + name;
}

returnGreeting();
