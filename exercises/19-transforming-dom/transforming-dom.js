/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  //Put your answers in here
  let image = document.querySelector("#hardAtWork");
  image.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"

  let linkMdn = document.querySelector("#linkMdn");
  linkMdn.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"

  let slogan = document.querySelector(".slogan");
  slogan.textContent="I am victorious!"

  let inlineColor = document.querySelector(".inlineColor");
  inlineColor.style.backgroundColor="yellow"

  let divBootstrap = document.querySelector(".divBootstrap");
  divBootstrap.style.color="blue"

  let hideDiv = document.querySelector(".hideDiv");
  hideDiv.style.display="none"

  let hiddenClass = document.querySelector(".hiddenClass")
  hiddenClass.style.display="block"


  let myButton = document.querySelector("button")

  if (myButton.classList.contains("divBlue")){
    let destination = document.querySelector("#destination");
    destination.textContent = "✓ blue"
  }

})();
