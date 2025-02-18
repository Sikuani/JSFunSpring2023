(function () {
  /**
   * You have two challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */
  // Write your answer here
  /**
   * Problem 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */
  // Write your answer here
  //Problem 1: Alert Me

  let alertButton = document.querySelector("#alertButton");

  alertButton.addEventListener("click", () => {
    alert("Alert mee!");
  });

  //Problem 2: Disable button

  //step 1 >> Target
  let cardButton = document.querySelector(".cardButton");
  cardButton.type = "submit";

  //step 2 >> reacc al evento
  const reactToCharge = () => {
    // Do something - disable the button and change the text to say loading...
    cardButton.disabled = "disabled";
    cardButton.textContent = "Loading ...";
  };
  cardButton.addEventListener("click", reactToCharge);
})();
