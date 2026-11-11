
// Display a message when the website loads
console.log("NOVA DIGITAL website is running!");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Add a click interaction
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + link.textContent);
    });
});
