// Select the navbar
const navbar = document.getElementById("navbar");

// Listen for scroll events
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Change background when scrolled
    } else {
        navbar.classList.remove("scrolled"); // Revert to original background
    }
});