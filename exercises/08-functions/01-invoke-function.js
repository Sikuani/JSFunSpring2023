/**
 * @param {number} subtotal
 * @param {number} tax
 * @returns {number} the total cost, including the tax
 */
// const calculateTotal = (subtotal, tax) => {
//   return subtotal * tax + subtotal;
// };

/**
 * You are paying your bill. You have a subtotal of $50.00 and tax is 2%.
 *
 * Create a variable called "total". The variable "total" should be equal to the result of "calculateTotal" (which is 60).
 * You will need to pass in arguments to  "calculateTotal".
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let subtotal = 50;



const calculateTotal = (subtotal, tax2) => {
  return ((subtotal * tax2) + subtotal);
};

calculateTotal(50, 20)

let total  = calculateTotal + subtotal;


console.log(total);