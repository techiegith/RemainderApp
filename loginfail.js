document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        // Simulate a login attempt (replace with your actual login logic)
        if (username === "user" && password === "password") {
            // Successful login
            window.location.href = "welcome.html"; // Redirect to a welcome page
        } else {
            // Failed login
            form.classList.add("login-failed");
            errorMessage.style.display = "block";
        }
    });
});