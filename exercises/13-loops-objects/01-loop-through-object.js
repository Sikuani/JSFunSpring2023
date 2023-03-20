const links = {
  Dogs: 'http://www.omfgdogs.com',
  Kittens: 'https://giphy.com/search/kitten',
  'Hamster Dance': 'https://hamster.dance/hamsterdance/',
};

/**
 * Create an variable called "html".
 * Loop through all properties within the "links" object
 * and set "html" to a list of HTML links.
 *
 * @example
 * console.log(html);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 *
 * Your answer should still work when "links" has different keys and values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
// for (let i = 0; i < links.length; i++) {
// let link = links[i];
// let html = (link)
// console.log(html);

// }

// let link1 = links.Dogs;
// let link2 = links.Kittens;
// let link3 = links[2];

// console.log(link1);
// console.log(link2);
// console.log(link3);

for (const link in links) {
  let html = `<a ref="${links[link]}">${link}</a>`;
  console.log(html);
}
