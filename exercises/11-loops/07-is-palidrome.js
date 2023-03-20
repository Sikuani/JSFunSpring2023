let string = 'racecar';

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
function palindrome(string) {
  let re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

  let lowRegStr = string.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(palindrome('noon'));
console.log(palindrome('moon'));

console.log(palindrome('Eva, can I see bees in a cave?')); //English sentece
console.log(palindrome('A mama Roma le aviva el amor y Roma le aviva el amor a mama')); //Spanish sentence

//Kevin Answer
// const reversed = str.split("").reverse().join("");  
// const isPalindrome = reversed === str;


