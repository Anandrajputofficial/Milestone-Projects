var form = document.querySelector('form');
var passwordInput = document.querySelector('#password');
var confirmInput = document.querySelector('#confirm-password');
var messageDiv = document.querySelector('#message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var password = passwordInput.value;
  var confirmedPassword = confirmInput.value;
  if (password === confirmedPassword) {
    messageDiv.textContent = "Password Matched. Password validation Successful.";
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "Password didn't match. Password validation unsuccessful.";
    messageDiv.style.color = "red";
  }
});

