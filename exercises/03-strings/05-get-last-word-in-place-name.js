const place = "New Jersey"; // e.g.

/**
 * Create a variable called "newPlace". It should use "place" above and it should be equal to the last part of a place name.
 * This should still work when place is equal to a different city, like "New Mexico" or "San Diego".
 *
 * @example
 * If "place" is equal to "New Jersey",
 * "newPlace" should equal "York"
 *
 * If "place" is equal to "New Mexico",
 * "newPlace" should equal "Mexico"
 *
 * If "place" is equal to "San Diego",
 * "newPlace" should equal "Diego"
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let newPlace = place.indexOf(" ");
console.log(newPlace);

const lastPlace = place.substring(newPlace + 1);
console.log("'" + lastPlace +  "'");

let index = place.indexOf(" ")

const myString = "i'm typing without autocapitalize"; // How can we capitalize just the first character in the string?

const firstChart = myString[0]
const myString2 = str.charAt(0);

console.log(myString2 + myString);
