
const siGravity = document.getElementById("startingGravity");
const fiGravity = document.getElementById("finalGravity");
const calcResult = document.getElementById("ABV_Result");
document.getElementById("calc-ABV-btn").onclick = calcABV;

// ABV Calculator
function calcABV() {
  const x = (siGravity.value - fiGravity.value) * 131;
  calcResult.innerHTML = "<h6>ABV:  <h6> " + x.toFixed(2) + "<h6>%</h6>";
  console.log(x.toFixed(2));
}

// Starting Gravity and Final Gravity must begin 1.0d{2}
function isValidGravity(startingGravity, finalGravity) {
  return /1.0\d{2}/.test(startingGravity, finalGravity);
}
/* show element when show is true, hide when false */
function showOrHideTip(show, element) {
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return (e) => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
   
  };
}
/* Event Listeners */
siGravity.addEventListener("input", createListener(isValidGravity));
fiGravity.addEventListener("input", createListener(isValidGravity));