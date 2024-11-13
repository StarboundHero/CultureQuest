// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Function to handle button clicks and redirect
    function handleButtonClick(buttonId, destinationUrl) {
        const button = document.getElementById(buttonId);
        if (button) { // Check if the button exists
            button.addEventListener("click", function () {
                window.location.href = destinationUrl;
            });
        }
    }

    // Button on the home page
    handleButtonClick("cta-button", "http://127.0.0.1:5500/signup.html"); // Redirect to signup

    // Cancel button on the signup page
    handleButtonClick("cancel-signup", "http://127.0.0.1:5500/index.html"); // Redirect to home page

    

    // You can add more button redirects here for other pages
});
