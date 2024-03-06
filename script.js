document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.form-box.login form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        if (validateCredentials(username, password)) {
            alert("Login successful!");

            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    function validateCredentials(username, password) {
        // Simplified validation (replace with secure authentication logic)
        return username === "al@gmail.com" && password === "secret123";
    }
});