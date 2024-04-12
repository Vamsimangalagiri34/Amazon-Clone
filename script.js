function attemptLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Here, you would validate the username and password (e.g., against a database)
  // For simplicity, let's assume a simple check where both fields should not be empty
  if (username && password) {
    // Successful login, do nothing for this example
    console.log('Login successful');
  } else {
    // Show the login failure popup
    document.getElementById('loginPopup').style.display = 'block';
  }
}

function closePopup() {
  document.getElementById('loginPopup').style.display = 'none';
}
