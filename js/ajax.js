document.addEventListener("DOMContentLoaded", () => {
  const error = "Error. There was a problem retrieving data. Status Code: ";
  const div = document.querySelector("#randomDiv");
  const divImg = document.querySelector("#randomImg");

  const btnTry = document.getElementById("btn");

  btnTry.addEventListener("click", () => {
    window.location.reload();
  });

  ///fetch request/response/status
  function randomCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v2/${api}/random.php`).then(
      (response) => {
        response.json().then((data) => {
          displayRandomCocktail(data);
          if (response.status !== 200) {
            console.log(`${error} response.status`);
            return;
          }
        });
      }
    );
  }
  randomCocktail();

  ///create my elements/properties & values.
  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  /// append my elements/properties & values to div.
  function appendElements(elementName, property, value) {
    const element = createElement(elementName, property, value);
    div.appendChild(element);
  }
 
  /// display/append drink name, and photo
  function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);
    appendElements("h2", "innerHTML", `${cocktail.drinks[0].strDrink}`);
    const img = createElement("img", "src", `${cocktail.drinks[0].strDrinkThumb}`);
    divImg.appendChild(img);

    /// loop through the ingredients to get rid of listed 'null' & empty strings.
    for (let i = 1; i < 16; i++) {
      if (
        cocktail.drinks[0][`strIngredient${i}`] === null ||
        cocktail.drinks[0][`strIngredient${i}`] === ""
      ) {
        break;
      } else if (
        cocktail.drinks[0][`strMeasure${i}`] === null ||
        cocktail.drinks[0][`strMeasure${i}`] === ""
      ) {
        break;
      }

      appendElements(
        "li", "innerHTML", `${ cocktail.drinks[0][`strMeasure${i}`] + 
        ": " + cocktail.drinks[0][`strIngredient${i}`]}`
      );
    } // measurements
    appendElements("p", "innerHTML", `${cocktail.drinks[0].strInstructions}`);
  } //instructions
});