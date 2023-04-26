(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here

  const input = document.querySelector("#textMystery");
  const renderDiv = document.querySelector("#divDisplay");

  input.addEventListener("input", () => {
    renderDiv.textContent = input.value;
  });


  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
    const inputSearch = document.querySelector("#inputSearch");
    const inputSearchButton = document.querySelector("#inputSearchButton")
    const textWhite = document.querySelector(".text-white");

    const formSearch = document.querySelector(".form-group")

    formSearch.addEventListener("submit", (e) =>{
      e.preventDefault() //to prevent the refresh page
      textWhite.innerText += `No results for ${inputSearch.value} found`

    })


  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here

  const termsButton = document.querySelector(".termsButton");
  const formCheckInput = document.querySelector(".form-check-input")
  const textDanger = document.querySelector(".text-danger")  
  const textSuccess = document.querySelector(".text-success")  
  const formTerms = document.querySelector(".formTerms")
  
  formTerms.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formCheckInput.checked) {
      textSuccess.style.display = "block"
      textDanger.style.display = "none"
    } else {
      textSuccess.style.display = "none"
      textDanger.style.display = "block"
    }
  })

})();
