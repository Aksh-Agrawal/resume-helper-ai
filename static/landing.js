// Landing Page JavaScript

// DOM Elements
const signInBtn = document.getElementById("signInBtn");
const getStartedBtn = document.getElementById("getStartedBtn");
const heroGetStarted = document.getElementById("heroGetStarted");
const ctaGetStarted = document.getElementById("ctaGetStarted");
const watchDemo = document.getElementById("watchDemo");
const signInModal = document.getElementById("signInModal");
const closeModal = document.querySelector(".close");
const authTabs = document.querySelectorAll(".auth-tab");
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");
const navToggle = document.getElementById("navToggle");

// Open Sign In Modal
function openSignInModal() {
  signInModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close Modal
function closeSignInModal() {
  signInModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Event Listeners
signInBtn?.addEventListener("click", openSignInModal);

getStartedBtn?.addEventListener("click", () => {
  window.location.href = "/app";
});

heroGetStarted?.addEventListener("click", () => {
  window.location.href = "/app";
});

ctaGetStarted?.addEventListener("click", () => {
  window.location.href = "/app";
});

watchDemo?.addEventListener("click", () => {
  alert("Demo video coming soon!");
});

closeModal?.addEventListener("click", closeSignInModal);

window.addEventListener("click", (e) => {
  if (e.target === signInModal) {
    closeSignInModal();
  }
});

// Auth Tabs
authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTab = tab.dataset.tab;

    // Update active tab
    authTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show/hide forms
    if (targetTab === "signin") {
      signinForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      signinForm.style.display = "none";
      signupForm.style.display = "block";
    }
  });
});

// Form Submissions (prevent default for demo)
document.querySelectorAll(".auth-form form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Authentication will be implemented with backend!");
    // Redirect to app
    window.location.href = "/app";
  });
});

// Social Auth Buttons
document.querySelectorAll(".btn-social").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const provider = btn.classList.contains("google") ? "Google" : "LinkedIn";
    alert(`${provider} authentication will be implemented!`);
    window.location.href = "/app";
  });
});

// Smooth Scroll for Navigation Links
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
  }

  lastScroll = currentScroll;
});

// Mobile Menu Toggle
navToggle?.addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
});

// Animate on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe feature cards
document
  .querySelectorAll(".feature-card, .template-showcase-card, .pricing-card")
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

// Pricing Card Interactions
document.querySelectorAll(".pricing-card .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".pricing-card");
    const plan = card.querySelector("h3").textContent;

    if (plan === "Enterprise") {
      alert("Enterprise sales team will contact you!");
    } else {
      window.location.href = "/app";
    }
  });
});

// Add ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple CSS dynamically
const style = document.createElement("style");
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log("Landing page initialized!");
