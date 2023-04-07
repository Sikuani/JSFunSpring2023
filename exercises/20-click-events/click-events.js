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
    let handleAlert = ()=> {
    alert("Alert me!")
  };
  alertButton.addEventListener("click", handleAlert)


//Problem 2: Disable button
  let cardButton = document.querySelector(".cardButton");

  let deactivate = () => {
    cardButton.disabled = true;
    cardButton.textContent = "Loading...";
  }
  cardButton.addEventListener("click", deactivate)
})();
