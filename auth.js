function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    localStorage.setItem('user', username);
    window.location.href = 'admin/dashboard.html';
  } else {
    alert('Please enter username and password.');
  }
}

function signup() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  if (username && password) {
    localStorage.setItem('user', username);
    alert('Account created! You can now log in.');
    window.location.href = 'index.html';
  } else {
    alert('Please fill out both fields.');
  }
}
