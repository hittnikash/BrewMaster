const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const error = 'Error. There was a problem retrieving data. Status Code: ';
const btn = document.getElementById('search');
const div = document.querySelector('#randomDiv');
const divText = document.querySelector('#textDiv');
const btnTry = document.getElementById('btn');

btnTry.addEventListener('click', () => {
    window.location.reload();
})

function randomCocktail(event) {                              ///fetch request/response/status
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

function appendElements(elementName, property, value) {      /// append my elements/properties & values.
    const element = createElement(elementName, property, value);
    div.appendChild(element); 
    }
    
function displayRandomCocktail(cocktail) {                    /// display/ append drink name, and photo
   console.log(cocktail.drinks[0]);
    appendElements('h3', 'innerHTML', `${cocktail.drinks[0].strDrink}`);
    appendElements('img', 'src', `${cocktail.drinks[0].strDrinkThumb}`);
     for(let i = 1; i < 16; i++) {                      /// loop through the ingredients to get rid of listed 'null'
        console.log(i);                                /// & empty strings.
        if(cocktail.drinks[0][`strIngredient${i}`]  === null || cocktail.drinks[0][`strIngredient${i}`] === ' ') {  
            break;
        }

    appendElements('li', 'innerHTML', `${cocktail.drinks[0][`strMeasure${i}`] +': ' + cocktail.drinks[0][`strIngredient${i}`]}`);  // measurements
   }

    appendElements('p', 'innerHTML', `${cocktail.drinks[0].strInstructions}`);  //instructions
    }
