const searchDiv = document.getElementById('searchResult');
const userInput = document.getElementById('userInput');
const searchBTN = document.getElementById('search');
const recipes = 'https://api.brewersfriend.com/v1/recipes83e1ccd597845308bf0a82cfdb4f09d974ae1b8';


function getBEERjason(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        if(xhr.status === 4 || xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
       return callback(data);
           }
        };
        xhr.send();
    }


searchBTN.addEventListener('click', (event) => {
    getBEERjason(recipes);
    })
   
//   function userFeedback() {
//   const input = userInput.value;
//   return `You searched for ${input}`;
    
//   }
