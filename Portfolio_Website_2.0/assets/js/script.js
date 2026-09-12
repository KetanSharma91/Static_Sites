
// Get all links in the nav
const navLinks = document.querySelectorAll(".nav-link a");
const sections = document.querySelectorAll("section");

// Track if an animation is currently running
let isAnimating = false;

// Add click event to each nav link
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // If an animation is already in progress, do nothing
    if (isAnimating) return;

    // Get the target section ID from the link's href (hash-based)
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // If the clicked link is already the active section, do nothing
    if (targetSection.classList.contains("active")) return;

    // Set animation flag
    isAnimating = true;

    // Animate fading out the current section
    const currentSection = document.querySelector("section.active");
    currentSection.classList.remove("active");
    currentSection.style.animation = "fadeOut 0.5s ease-in-out";

    // Wait for fade-out animation to complete
    currentSection.addEventListener("animationend", () => {
      currentSection.classList.add("dn");
      currentSection.style.animation = ""; // Reset animation

      // Show the target section
      targetSection.classList.remove("dn");
      targetSection.classList.add("active");

      // Update the URL with the new hash
      window.location.hash = targetId;

      // const newUrl = window.location.origin + window.location.pathname.split('#').slice(0, -1) + '/' + targetId;
      const newUrl = window.location.hash;
      // const newUrl = window.location.origin + targetId;
      history.pushState(null, null, newUrl);

      navLinks.forEach(navLink => {
        const linkHref = navLink.getAttribute("href").substring(1);
        if (linkHref === targetId) {
          navLink.classList.add("linkset");
        } else {
          navLink.classList.remove("linkset");
        }
      });

      // Wait for fade-in animation to complete
      targetSection.addEventListener("animationend", () => {
        isAnimating = false; // Reset animation flag
      }, { once: true });
    }, { once: true });
  });
});

// Handle hash change and load the corresponding section
// window.addEventListener("hashchange", () => {
//     const targetId = window.location.hash.substring(1);
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//         // Hide all sections
//         sections.forEach(section => {
//             section.classList.add("dn");
//             section.classList.remove("active");
//         });

//         // Show the target section
//         targetSection.classList.remove("dn");
//         targetSection.classList.add("active");
//     }
// });

// Handle initial page load and show the correct section based on the hash
window.addEventListener("load", () => {
  const targetId = window.location.hash.substring(1) || "home";  // Default to 'home' if no hash is present
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.add("dn");
      section.classList.remove("active");
    });

    // Show the target section
    targetSection.classList.remove("dn");
    targetSection.classList.add("active");
  }
});


const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
  const scrollX = window.scrollX || window.pageXOffset; 
  const scrollY = window.scrollY || window.pageYOffset; 

  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.style.transform = 'scale(1.5)';
    cursor.style.borderColor = '#FF6F00';
  });
  link.addEventListener('mouseout', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.borderColor = '#00CFFD';
  });
});


// Portfolio JS
Fancybox.bind("[data-fancybox='gallery']", {
  Toolbar: {
    display: ["close"], // Show close, previous, and next buttons
  },
  Thumbs: {
    autoStart: false, // Disable thumbnails by default
  },
  infinite: true, // Enable infinite loop for navigation
});

//Skills bar animation
const skillsection = document.querySelectorAll('.progress');

// Create the intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'active' class to start the animation when the element is in view
      entry.target.classList.add('open');
    }
  });
}, { threshold: 0.5 }); // 50% of the section needs to be visible to trigger

// Observe each section
skillsection.forEach(section => {
  observer.observe(section);
});

const navbar = document.querySelector('nav');
const linkset = document.querySelectorAll(".nav-link");

linkset.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});