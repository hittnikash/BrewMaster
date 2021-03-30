// Bottle brew flavor notes- toggles from hidden to visable
function modalToggleA() {
  const modalToggleA = () => {
    document.querySelector(".flavorModalA").classList.toggle('flavorModalA--hidden');
  };
    // opens flavor modal
  document.getElementById('flavorA').addEventListener('click', modalToggleA);
    //closes flavor modal
  document.getElementById('closeA').addEventListener('click', modalToggleA);
  }
  
  function modalToggleB() {
  const modalToggleB = () => {
    document.querySelector(".flavorModalB").classList.toggle('flavorModalB--hidden');
    };
  
  document.getElementById('flavorB').addEventListener('click', modalToggleB);
  document.getElementById('closeB').addEventListener('click', modalToggleB);
  }
  
  function modalToggleC() {
  const modalToggleC = () => {
    document.querySelector(".flavorModalC").classList.toggle('flavorModalC--hidden');
    };
  document.getElementById('flavorC').addEventListener('click', modalToggleC);
  document.getElementById('closeC').addEventListener('click', modalToggleC);
  };


  
  



