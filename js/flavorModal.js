
function modalToggleA() {
const modalToggleA = () => {
  document.querySelector(".flavorModalA").classList.toggle('flavorModalA--hidden');
};
  // opens flavor modal
document.getElementById('flavorA').addEventListener('click', modalToggleA);
//closes flavor modal
document.getElementById('closeA').addEventListener('click', modalToggleA);
};


function modalToggleB() {
const modalToggleB = () => {
  document.querySelector(".flavorModalB").classList.toggle('flavorModalB--hidden');
  };
// opens flavor modal
document.getElementById('flavorB').addEventListener('click', modalToggleB);
//closes flavor modal
document.getElementById('closeB').addEventListener('click', modalToggleB);
};


function modalToggleC() {
const modalToggleC = () => {
  document.querySelector(".flavorModalC").classList.toggle('flavorModalC--hidden');
  };
  // opens flavor modal
document.getElementById('flavorC').addEventListener('click', modalToggleC);
//closes flavor modal
document.getElementById('closeC').addEventListener('click', modalToggleC);
};


//to refactor



