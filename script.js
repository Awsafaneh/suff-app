// Multi-page routing
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"))

  // Show selected page
  const selectedPage = document.getElementById(`${page}-page`)
  if (selectedPage) {
    selectedPage.classList.add("active")
    window.scrollTo(0, 0)
  }

  // Close mobile menu
  document.getElementById("navLinks").classList.remove("active")
  document.getElementById("menuToggle").classList.remove("active")
}

// Mobile menu toggle
document.getElementById("menuToggle")?.addEventListener("click", function () {
  this.classList.toggle("active")
  document.getElementById("navLinks").classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menuToggle").classList.remove("active")
    document.getElementById("navLinks").classList.remove("active")
  })
})

// Logo click to home
document.querySelector(".logo")?.addEventListener("click", () => {
  navigateTo("home")
})

// Tab switching
function switchTab(tabName, btn) {
  document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"))
  document.querySelectorAll(".tab-btn").forEach((button) => button.classList.remove("active"))

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

  document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("active"))

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

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href")
    if (href !== "#") {
      const element = document.querySelector(href)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})

// Navbar shadow effect on scroll
let scrollTimeout
window.addEventListener("scroll", () => {
  if (!scrollTimeout) {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.2)"
    } else {
      navbar.style.boxShadow = "none"
    }

    scrollTimeout = setTimeout(() => {
      scrollTimeout = null
    }, 10)
  }
})

// Intersection Observer for scroll animations
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

// Track mouse movement for interactive effects
let mouseTimeout
document.addEventListener("mousemove", (e) => {
  const gradient = document.querySelector(".hero-gradient")
  if (gradient && !mouseTimeout) {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    gradient.style.transform = `translate(${x * 50}px, ${y * 50}px)`

    mouseTimeout = setTimeout(() => {
      mouseTimeout = null
    }, 10)
  }
})

// Initialize page on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feature-card, .stat-card, .pricing-card, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    observer.observe(el)
  })

  // Animate metrics
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

// Animate counter numbers
function animateCounters() {
  const metricValues = document.querySelectorAll(".metric-value")

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

// Prevent default behavior for mailto and tel links
document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    // Allow default behavior for these links
  })
})

// Set initial active page
document.getElementById("home-page").classList.add("active")
