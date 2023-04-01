// E.g. do not change me
const createLink = (text) => {
  return `<a href="#" class="button">${text}</a>`;
};

// E.g. do not change me
const createButton = (text) => {
  return `<button type="button">${text}</button>`;
};

/**
 * Right now, "createCallToAction" only invokes "createLink",
 * However, we want make "createCallToAction" more flexible
 * so that it can invoke both "createLink" and "createButton".
 *
 * What you need to do is update "createCallToAction" so that
 * it is uses a callback instead of invoking "createLink" directly.
 */

// CHANGE SOMETHING WITH THE FUNCTION DECLARATION
const createCallToAction = (clickableText, callback) => {
  // CHANGE SOMETHING INSIDE THIS FUNCTION
  return callback(clickableText);
};

// CHANGE SOMETHING HERE TOO so that creates a link
console.log(createCallToAction('Book Now', createLink));
console.log(createCallToAction('Book Now', createButton));

// IGNORE THIS BELOW. It is for the tests.

export { createCallToAction };



//My answer
/*
if (callback === createLink) {
  return createLink(clickableText);
} else if (callback === createButton) {
  return createButton(clickableText);
}*/

//Answer Erdem Zengin
/*
return ("<div>Limited time: members save 30%<br>" + callback(clickableText) + "</div>")*/
