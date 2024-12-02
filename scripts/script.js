// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Navigation Menu
  const toggleButton = document.querySelector(".nav-toggle");
  const sideNav = document.querySelector(".side-nav");
  const closeButton = document.querySelector(".close-btn");

  // Open side navigation when hamburger menu is clicked
  toggleButton.addEventListener("click", () => {
    sideNav.style.left = "0"; // Slide in the side navigation
  });

  // Close side navigation when close button is clicked
  closeButton.addEventListener("click", () => {
    sideNav.style.left = "-250px"; // Slide out the side navigation
  });
});


  // Smooth Scroll for Anchor Links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Hero Hover Effect (Only if .hero exists)
  const header = document.querySelector(".header-2__desktop");
  const hero = document.querySelector(".hero");
  if (header && hero) {
    header.addEventListener("mouseenter", () => hero.classList.add("hovered"));
    header.addEventListener("mouseleave", () => hero.classList.remove("hovered"));
  }

  // Carousel Buttons
  const carousel = document.querySelector(".social-feed");
  const leftButton = document.querySelector(".carousel-left");
  const rightButton = document.querySelector(".carousel-right");

  if (carousel && leftButton && rightButton) {
    leftButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightButton.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  // Newsletter Form Submission
  const form = document.querySelector(".newsletter form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : "";

      // Simple email validation
      if (email && /\S+@\S+\.\S+/.test(email)) {
        alert(`Thank you for subscribing, ${email}!`);
        form.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
