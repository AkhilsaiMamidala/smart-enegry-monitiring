// Predefined usernames and passwords
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
    { username: "user5", password: "pass5" }
];

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the credentials match any of the predefined users
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // If credentials are correct, redirect to index.html
        window.location.href = "energy.html";
        return false;  // Prevent form submission
    } else {
        // If credentials are incorrect, show error message
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.visibility = "visible";
        return false;  // Prevent form submission
    }
}
