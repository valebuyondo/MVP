// In your frontend JavaScript file
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/routes/assetRoute/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/index.html'; // Redirect to main page on successful login
        } else {
            throw new Error('Login failed');
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
    });
});
