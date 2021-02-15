const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const error = 'Error. There was a problem retrieving data. Status Code: ';
const btn = document.getElementById('search');
const div = document.querySelector('#randomDiv');

function randomCocktail() {                              
fetch(urlRandom)
  .then((response) => { response.json()                  
  .then((data) => {displayRandomCocktail(data);    
    if (response.status !== 200) {
    console.log(`${error} response.status`);
    return;
   }                                 
      });
    }
  );
}
randomCocktail();

function createElement(elementName, property, value) {   ///create my elements/properties & values.
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
    }

function appendElements(elementName, property, value) {
    const element = createElement(elementName, property, value);
    div.appendChild(element); 
    }
    
function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);
  
    
    appendElements('h3', 'innerHTML', `${cocktail.drinks[0].strDrink}`);
    appendElements('img', 'src', `${cocktail.drinks[0].strDrinkThumb}`);
    

    for(let i = 1; i < 16; i++) {
        console.log(i);
        if(cocktail.drinks[0][`strIngredient${i}`]  === null || cocktail.drinks[0][`strIngredient${i}`] === ' ') {
            break;
        }
    appendElements('li', 'innerHTML', `${cocktail.drinks[0][`strMeasure${i}`] +': ' + cocktail.drinks[0][`strIngredient${i}`]}`);
    }

    appendElements('p', 'innerHTML', `${cocktail.drinks[0].strInstructions}`);
    }