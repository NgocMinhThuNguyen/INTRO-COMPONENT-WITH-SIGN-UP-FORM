const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const userInput = document.querySelectorAll('input');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  validateForm();
});

function validateForm() {
  for (const input of userInput) {
    let error = input.nextElementSibling;

    // Show error when inputs are blank
    if (input.value === '') {
      if (input === firstName) {
        error.textContent = "First Name cannot be blank";
      } else if (input === lastName) {
        error.textContent = "Last Name cannot be blank";
      } else if (input === password) {
        error.textContent = "Password cannot be blank";
      } else {
        error.textContent = "Email cannot be blank"
      }
      showError(input, error);
    
    // Check Email Syntax  
    } else if ((input.value !== '') && (input === email)) {
        validateEmail(input, error);
    } else {
      showSucces(input, error);
      alert("Thank you for your registration!");
      break;
    }
  }
}

function showError(input, error) {
  input.classList.add("show-error");
  error.classList.add("show-error");
}

function showSucces(input, error) {
  input.classList.remove("show-error");
  error.classList.remove("show-error");
}

function validateEmail(input, error) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!(emailRegex.test(input.value))) {
    error.textContent = "Looks like this is not an email"
    showError(input, error);
  } else {
    showSucces(input, error);
  }
}


