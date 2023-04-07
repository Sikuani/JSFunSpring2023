/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  console.log(document.querySelector("li"));

  console.log(document.querySelector("#myId"));

  const yellowBg = document.querySelectorAll(".bg-warning");
  yellowBg.forEach((yellow) => {
    console.log(yellow);
    yellow.style.backgroundColor = "red";
  });

  let buttonTarget = document.querySelector("#buttonTarget");
  buttonTarget.style.backgroundColor = "red";

  console.log(document.querySelectorAll('[data-social="socialLinks"'));
  
  let cells = document.querySelectorAll(`#myRow .col`);
  cells.forEach((cell) => {
    console.log(cell);
  }) 
})();
