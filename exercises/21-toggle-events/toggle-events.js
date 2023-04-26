(function () {
  /**
   * Problem 1: Dismiss the "Accept Cookies" popup
   *
   * When the user clicks on the "Accept Cookies" button, the "Accept Cookies" popup should disappear.
   */
  // Write your answer here
  
  //1. target
  const acceptCookiesPopup = document.querySelector("#acceptCookiesPopup")
  const acceptCookiesButton = document.querySelector("#acceptCookiesButton");

  //3. Do something
  const hidePopup = () => {
    acceptCookiesPopup.style.display = "none"
  }

  //2. React to an event
  acceptCookiesButton.addEventListener("click", hidePopup)


  /**
   * Problem 2: Show comments for the news story.
   *
   * You will need modify the HTML so that you can target HTML elements o the page.
   *
   * You will be toggling the comments on the page.
   * If the comments are hidden, this should happen when the user clicks on the "View Comments" button:
   * 1. The comment section should appear
   * 2. The "View Comments" button will change to say "Hide Comments"
   *
   * If the comments are visible, this should happen when the user clicks on the "Hide Comments" button:
   * 1. The comments sections should disappear
   * 2. The "Hide Comments" button should change to say "View Comments"
   *
   * HINT: Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   */
  // Write your answer here

  //Target
  let toggleComments = document.querySelector("#toggleComments");
  let comments = document.querySelector("#comments")

  //React
  toggleComments.addEventListener("click", () => {
    //Show them
    if (comments.classList.contains("hidden")) {
      comments.classList.remove("hidden")
      toggleComments.textContent = "Hide comments"
    } else {
      //hide them
      comments.classList.add("hidden");
      toggleComments.textContent = "Show comments"
    }
  })
})();
