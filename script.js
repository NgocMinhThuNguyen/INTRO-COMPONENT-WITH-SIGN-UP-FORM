const firstName = document.querySelector("#first-name").value;
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
let errorText = document.querySelectorAll("form .error-text");
const submitBtn = document.querySelector("button");
const form = document.querySelector("form");
const formfs= document.querySelectorAll("form input");

form.addEventListener("submit", (event) => {
  // event.preventDefault();
  for (error of errorText) {
    console.log(error);
  }
  checkFirstName(firstName);
  checkLastName(lastName);
});

for (element of form) {
  element.addEventListener('click', (event) => {
    errorText.classList.remove("show-error")
  })
}

function checkFirstName(firstName) {
  if (firstName === "") {
    errorText.textContent = "First Name cannot be empty"
    errorText.classList.add("show-error");
  }
};

function checkFirstName(lastName) {
  if (lastName === "") {
    errorText.textContent = "Last Name cannot be empty"
    errorText.classList.add("show-error");
  }
};