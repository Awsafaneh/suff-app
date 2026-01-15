// Smooth scrolling for navigation links
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Tab switching
function switchTab(tabName, btn) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content")
  tabs.forEach((tab) => tab.classList.remove("active"))

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tab-btn")
  buttons.forEach((button) => button.classList.remove("active"))

  // Show selected tab
  const selectedTab = document.getElementById(tabName)
  if (selectedTab) {
    selectedTab.classList.add("active")
    btn.classList.add("active")
  }
}

// FAQ toggle
function toggleFAQ(btn) {
  const item = btn.parentElement
  const isActive = item.classList.contains("active")

  // Close all other FAQs
  document.querySelectorAll(".faq-item").forEach((faq) => {
    faq.classList.remove("active")
  })

  // Toggle current FAQ
  if (!isActive) {
    item.classList.add("active")
  }
}

// Form submission
function handleFormSubmit(e) {
  e.preventDefault()
  alert("Thank you for your message! We will get back to you soon.")
  e.target.reset()
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.2)"
  } else {
    navbar.style.boxShadow = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeIn 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all cards on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feature-card, .stat-card, .pricing-card, .testimonial-card").forEach((el) => {
    observer.observe(el)
  })
})
