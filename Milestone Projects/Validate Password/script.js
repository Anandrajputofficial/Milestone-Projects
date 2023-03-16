const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const validationMsg = document.getElementById("validation-msg");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // check if email is valid
  if (email.indexOf("@") === -1) {
    validationMsg.textContent = "Invalid email or password!";
    validationMsg.style.color = "red";
    return;
  }

  // check if password is valid
  if (password.length < 8) {
    validationMsg.textContent = "Invalid email or password!";
    validationMsg.style.color = "red";
    return;
  }

  // if email and password are valid
  validationMsg.textContent = "Valid email and password!";
  validationMsg.style.color = "green";
});
