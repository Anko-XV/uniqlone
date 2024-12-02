// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const sideNav = document.querySelector(".side-nav");
  const closeBtn = document.querySelector(".close-btn");

  // Open Side Navigation
  navToggle.addEventListener("click", () => {
    sideNav.classList.add("open");
  });

  // Close Side Navigation
  closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("open");
  });
});

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Check if user has a preferred theme saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Save user preference
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
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

  document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const itemWidth = items[0].getBoundingClientRect().width; // Width of a single review
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move track
    };
  
    // Previous Button (Scroll Left)
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    // Next Button (Scroll Right)
    nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Optional: Adjust carousel when resizing (for responsiveness)
    window.addEventListener('resize', updateCarousel);
  
    // Initialize the carousel
    updateCarousel();
  });
  


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
  document.addEventListener("DOMContentLoaded", () => {
    const leftButton = document.querySelector('.carousel-left');
    const rightButton = document.querySelector('.carousel-right');
    const feed = document.querySelector('.social-feed');
    const items = document.querySelectorAll('.social-item');
    let currentIndex = 0;

    // Function to update the carousel position
    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        feed.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Move left
    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Move right
    rightButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
