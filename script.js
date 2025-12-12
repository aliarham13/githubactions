// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "flex" ? "none" : "flex";
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });

        // Hide menu on mobile after clicking
        if (window.innerWidth <= 768) {
            navMenu.style.display = "none";
        }
    });
});

// Button Click Action
document.getElementById("startBtn").addEventListener("click", () => {
    alert("You clicked Get Started!");
});
