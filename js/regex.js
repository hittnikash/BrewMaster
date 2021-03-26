document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const form = document.getElementById("form");

  /* RegExpression */
  /* First Name must contain only letters */
  function isValidName(firstName, lastName) {
    return /[a-z]+/.test(firstName, lastName);
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
    return (e) => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }
  /* Event Listeners */
  firstNameInput.addEventListener("input", createListener(isValidName));
  lastNameInput.addEventListener("input", createListener(isValidName));
  emailInput.addEventListener("input", createListener(isValidEmail));
  form.addEventListener("submit", postData);


//  check status 
  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  /* Post comments to jsonPlaceholder */
  function postData(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const feedback = document.getElementById("feedback").value;

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        feedback,
      }),
    };

    fetch("https://jsonplaceholder.typicode.com/comments", config)
      .then(checkStatus)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
});