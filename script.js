// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all project cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".project-card, .about-section, .social-section"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add typing effect to tagline
const tagline = document.querySelector(".tagline");
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  setTimeout(type, 500);
}

// Add current year to footer
const yearSpan = document.querySelector(".current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Add hover effect to profile image
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  profileImage.addEventListener("mouseenter", () => {
    profileImage.style.transform = "scale(1.1) rotate(5deg)";
  });

  profileImage.addEventListener("mouseleave", () => {
    profileImage.style.transform = "scale(1) rotate(0deg)";
  });
}

// Add particle effect to header (optional)
function createParticle() {
  const header = document.querySelector(".header");
  if (!header) return;

  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = "5px";
  particle.style.height = "5px";
  particle.style.background = "rgba(255, 255, 255, 0.5)";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.pointerEvents = "none";
  particle.style.animation = "float 4s ease-in-out infinite";

  header.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 4000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Add CSS animation for particles
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Log message for visitors
console.log(
  "%c👋 Welcome to my portfolio!",
  "font-size: 20px; color: #667eea; font-weight: bold;"
);
console.log(
  "%cInterested in my work? Let's connect!",
  "font-size: 14px; color: #764ba2;"
);
