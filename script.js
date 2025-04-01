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

let slideIndex = 0;

// form response
            document.addEventListener("DOMContentLoaded", function() {
                document.getElementById("contactForm").addEventListener("submit", function(event) {
                    event.preventDefault(); // Prevent default form submission
            
                    // Get form values
                    let name = document.getElementById("name").value.trim();
                    let email = document.getElementById("email").value.trim();
                    let message = document.getElementById("message").value.trim();
                    let responseMsg = document.getElementById("formResponse");
            
                    // Validate inputs
                    if (name === "" || email === "" || message === "") {
                        responseMsg.innerHTML = "❌ Please fill in all fields!";
                        responseMsg.style.color = "red";
                        return;
                    }
            
                    // Validate email format
                    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
                    if (!email.match(emailPattern)) {
                        responseMsg.innerHTML = "❌ Please enter a valid email address!";
                        responseMsg.style.color = "red";
                        return;
                    }
            
                    // Simulated success response (You can replace this with an AJAX request to your backend)
                    responseMsg.innerHTML = "✅ Message sent successfully!";
                    responseMsg.style.color = "green";
            
                    // Clear form after submission
                    document.getElementById("contactForm").reset();
                });
            });
         

