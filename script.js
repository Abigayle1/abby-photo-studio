const storedUsername = 'testUser';
const storedPassword = 'testPass123';

let loginAttempts = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'products.html'; // Redirect to the products page
    } else {
        loginAttempts++;
        document.getElementById('error-message').textContent = `Invalid login attempt ${loginAttempts}.`;

        if (loginAttempts >= 3) {
            window.location.href = 'error.html'; // Redirect to the error page
        }
    }
});
