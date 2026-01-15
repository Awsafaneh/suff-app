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
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.animation = "fadeIn 0.6s ease forwards"
        observer.unobserve(entry.target)
      }, index * 100)
    }
  })
}, observerOptions)

// Observe all cards and special items
window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".feature-card, .stat-card, .pricing-card, .testimonial-card, .trust-item")
    .forEach((el) => {
      observer.observe(el)
    })

  // Animate counters when metrics section comes into view
  const metricsSection = document.querySelector(".performance-metrics")
  if (metricsSection) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
      }
    }).observe(metricsSection)
  }
})

function animateCounters() {
  const metricValues = document.querySelectorAll(".metric-value")

  const counters = {
    "2.3s": { duration: 2000, format: "time" },
    "99.8%": { duration: 2000, format: "percent" },
    "5000+": { duration: 2000, format: "number" },
  }

  metricValues.forEach((el) => {
    const finalValue = el.textContent
    if (counters[finalValue]) {
      const start = 0
      const end = Number.parseFloat(finalValue)
      const increment = end / 60
      let current = start

      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          el.textContent = finalValue
          clearInterval(timer)
        } else {
          if (finalValue.includes("%")) {
            el.textContent = current.toFixed(1) + "%"
          } else if (finalValue.includes("s")) {
            el.textContent = current.toFixed(1) + "s"
          } else {
            el.textContent = Math.floor(current) + "+"
          }
        }
      }, 30)
    }
  })
}
