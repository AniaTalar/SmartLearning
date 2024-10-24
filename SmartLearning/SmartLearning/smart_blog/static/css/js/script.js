// script.js

// Simple event listener that triggers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Example: Show an alert when the page loads
    console.log("Page has loaded!");

    // Example: Add a dynamic greeting based on the time of day
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        greetingElement.innerText = greeting;
    }
});
