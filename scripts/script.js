// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".header-2__desktop");
  
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
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
  });

  document.querySelector('.header-2__desktop').addEventListener('mouseenter', () => {
    document.querySelector('.hero').classList.add('hovered');
  });
  
  document.querySelector('.header-2__desktop').addEventListener('mouseleave', () => {
    document.querySelector('.hero').classList.remove('hovered');
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const leftButton = document.querySelector(".carousel-left");
    const rightButton = document.querySelector(".carousel-right");
  
    leftButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });
  
    rightButton.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
  
      if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        form.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });
  