
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
/* RegExpression */
/* First Name must contain only letters */
function isValidName(name) {
    return /[a-z]+/.test(name);
}

/* First Name must contain only letters */
function isValidName(name) {
    return /[a-z]+/.test(name);
}

/* Email must be formatted correctly */
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
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
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip);
    };
}
firstNameInput.addEventListener("input", createListener(isValidName));
lastNameInput.addEventListener("input", createListener(isValidName));
emailInput.addEventListener("input", createListener(isValidEmail));

function thanks() {
    const userName = document.getElementById('name').value;
    document.getElementById("thankyouMes").innerHTML = `Thank you ${userName}, we appreciate your feedback!`;
}
