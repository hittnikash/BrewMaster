const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const error = 'Error. There was a problem retrieving data. Status Code: ';
const btn = document.getElementById('search');


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
  )
}
randomCocktail();


function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);

        function createElement(elementName, property, value) {
            const element = document.createElement(elementName);
            element[property] = value;
            return element;
        }    
  
const div = document.querySelector('#randomDiv');
const beverageName = document.createElement('h3');
beverageName.innerHTML = cocktail.drinks[0].strDrink;
div.appendChild(beverageName);


const img = document.createElement('img');
img.src = cocktail.drinks[0].strDrinkThumb;
div.appendChild(img);



for(let i = 1; i < 16; i++) {
    console.log(i);
    if(cocktail.drinks[0][`strIngredient${i}`] || cocktail.drinks[0][`strMeasure${i}`] === null || cocktail.drinks[0][`strIngredient${i}`] || cocktail.drinks[0][`strMeasure${i}`]=== ' ') {
        break;
    }
const list = document.createElement('ul');
const ingredients = document.createElement('li');
ingredients.innerHTML = cocktail.drinks[0][`strMeasure${i}`] +': ' + cocktail.drinks[0][`strIngredient${i}`];
div.appendChild(list);
div.appendChild(ingredients);

};

const instructions = document.createElement('p');
instructions.innerHTML = cocktail.drinks[0].strInstructions;
div.appendChild(instructions)
}

