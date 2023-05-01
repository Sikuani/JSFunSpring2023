(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

  let dropdown = document.querySelector("#dropdown");
  let getSchwifty = document.querySelector("#get-schwifty");
  let selection = null;

  async function chooseCharacter() {
    try {
    const getApi = await fetch("https://rickandmortyapi.com/api/character"); //get the api

    const data = await getApi.json(); //convert string to json

    data.results.forEach((items) => {
      //loop the array
      dropdown.innerHTML += `<option>${items.name}</option>`;
    });

    dropdown.addEventListener("change", () => {
      selection = dropdown.selectedIndex;
      getSchwifty.src = `https://rickandmortyapi.com/api/character/avatar/${selection}.jpeg`;
    })}

    catch (error) {
      console.log(error);
    }
  }
  chooseCharacter();

  

})();
