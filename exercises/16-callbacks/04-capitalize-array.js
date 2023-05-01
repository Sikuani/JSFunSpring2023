// e.g.
const capitalizeString = (str) => {
  return str.toUpperCase();
};
/**
 * "capitalizeArray" should capitalize all letters within an array of strings.
 *
 * Here is what you need to do:
 * - Inside the capitalizeArray function, create an empty array called "result".
 * - Loop through each string in the "originalArray" array using a for loop.
 * - In the loop, call the callback function with the current string as its argument.
 * This should return the capitalized version of the string.
 * - Store the capitalized string in a variable called "capitalizedStr".
 * - Add "capitalizedStr" to the "result" array.
 * - After the loop, return the "result" array, which should now contain the capitalized strings.
 *
 * @example
 * const capitalizeString = (str) => str.toUpperCase();
 * const result = capitalizeArray(['hello', 'world'], capitalizeString); // ['HELLO', 'WORLD']
 */
const capitalizeArray = (originalArray, callback) => {
  //WRITE YOUR ANSWER IN HERE
  //Catherine Felton's answer
  let result = [];
  for (let i = 0; i < originalArray.length; i++) {
    let capitalizedString = callback(originalArray[i]);
    result.push(capitalizedString);
  }
  return result;
};

// Uncomment me to test your answer in Quokka
console.log(capitalizeArray(['hello', 'world', 'dog'], capitalizeString));

// IGNORE THIS BELOW. It is for the tests.

export { capitalizeArray };

//Me
/*let result = originalArray;
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
    return(capitalizeString(result[i]));    
  }*/
