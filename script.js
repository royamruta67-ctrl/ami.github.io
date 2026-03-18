// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact Form Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your inquiry. A Jimmy Goldsmith specialist will contact you shortly to confirm your appointment.");
    this.reset();
});

// Subtle Navbar transition
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.padding = "10px 8%";
        nav.style.backgroundColor = "#000";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.backgroundColor = "rgba(0,0,0,0.9)";
    }
});
