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
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1"
        entry.target.style.animation = "slideUp 0.6s ease forwards"
        observer.unobserve(entry.target)
      }, index * 50)
    }
  })
}, observerOptions)

// Observe all cards and special items
window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".feature-card, .stat-card, .pricing-card, .testimonial-card, .trust-item, .faq-item")
    .forEach((el) => {
      el.style.opacity = "0"
      observer.observe(el)
    })

  const metricsSection = document.querySelector(".performance-metrics")
  if (metricsSection) {
    const metricsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        metricsObserver.unobserve(metricsSection)
      }
    })
    metricsObserver.observe(metricsSection)
  }
})

function animateCounters() {
  const metricValues = document.querySelectorAll(".metric-value")
  const animationsStarted = false

  metricValues.forEach((el, index) => {
    const finalValue = el.textContent

    setTimeout(() => {
      if (finalValue.includes("s")) {
        animateValue(el, 0, 2.3, 1500, "s")
      } else if (finalValue.includes("%")) {
        animateValue(el, 0, 99.8, 1500, "%")
      } else if (finalValue.includes("+")) {
        animateValue(el, 0, 15000, 1500, "+")
      }
    }, index * 150)
  })
}

function animateValue(element, start, end, duration, suffix) {
  let startTimestamp = null

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const current = Math.floor(progress * (end - start) + start)

    if (suffix === "%") {
      element.textContent = (start + progress * (end - start)).toFixed(1) + "%"
    } else if (suffix === "s") {
      element.textContent = (start + progress * (end - start)).toFixed(1) + "s"
    } else {
      element.textContent = current + "+"
    }

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
