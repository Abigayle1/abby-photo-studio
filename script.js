// sample username and password
const storedUsername = 'testUser';
const storedPassword = 'testPass123';

let loginAttempts = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

// check if username and password matches
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'products.html'; 
    } else {
        loginAttempts++;
        document.getElementById('error-message').textContent = `Invalid login attempt ${loginAttempts}.`;
        
// redirect to error page if 3 wrong attempts
        if (loginAttempts >= 3) {
            window.location.href = 'error.html'; 
        }
    }
});
