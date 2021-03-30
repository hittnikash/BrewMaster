
  // Toggles Extract List from hidden to visabile
function imgListToggle() {
  document.querySelector(".centerList").classList.toggle("centerList--hidden");
}
// opens flavor modal
document.getElementById("ex-image").addEventListener("click", imgListToggle);
//closes flavor modal
document.querySelector("body").addEventListener("click", imgListToggle);
      
