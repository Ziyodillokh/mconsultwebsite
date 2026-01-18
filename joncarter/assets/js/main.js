// API Configuration
const API_BASE_URL = "http://localhost:3000/api";

// Initialize plugins
gsap.registerPlugin(ScrollTrigger);
AOS.init({ duration: 1500, once: false });

// Check backend connection on load
async function checkBackendConnection() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (response.ok) {
      const data = await response.json();
      console.log("✅ Backend connected:", data);
    }
  } catch (error) {
    console.warn("⚠️ Backend not available at", API_BASE_URL);
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", checkBackendConnection);

// ============================================
// Authentication Modal Functions
// ============================================

function openAuthModal(type) {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (type === "login") {
    loginModal.classList.remove("hidden");
    registerModal.classList.add("hidden");
  } else if (type === "register") {
    registerModal.classList.remove("hidden");
    loginModal.classList.add("hidden");
  }
}

function closeAuthModal(type) {
  if (type === "login") {
    document.getElementById("loginModal").classList.add("hidden");
  } else if (type === "register") {
    document.getElementById("registerModal").classList.add("hidden");
  }
}

function switchAuthModal() {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (!loginModal.classList.contains("hidden")) {
    closeAuthModal("login");
    openAuthModal("register");
  } else {
    closeAuthModal("register");
    openAuthModal("login");
  }
}

// Close modal when clicking outside
document.addEventListener("click", (e) => {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (e.target === loginModal && !loginModal.classList.contains("hidden")) {
    closeAuthModal("login");
  }
  if (
    e.target === registerModal &&
    !registerModal.classList.contains("hidden")
  ) {
    closeAuthModal("register");
  }
});

// Handle Login
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const loginBtn = document.getElementById("loginBtn");
  const loginBtnText = document.getElementById("loginBtnText");
  const loginError = document.getElementById("loginError");
  const loginErrorMsg = document.getElementById("loginErrorMsg");

  // Clear previous errors
  loginError.classList.add("hidden");

  // Disable button
  loginBtn.disabled = true;
  loginBtnText.textContent = "Yuklanmoqda...";

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success message
      alert(`Xush kelibsiz, ${data.user.name}!`);

      // Close modal and reset form
      closeAuthModal("login");
      document.getElementById("loginForm").reset();

      // Update navbar to show logged in status
      updateNavbarForLoggedIn();
    } else {
      loginErrorMsg.textContent =
        data.message || "Login muvaffaqiyatsiz bo'ldi";
      loginError.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Login error:", error);
    loginErrorMsg.textContent =
      "Server bilan aloqa o'rnatib bo'lmadi. Iltimos qayta urinib ko'ring.";
    loginError.classList.remove("hidden");
  } finally {
    // Enable button
    loginBtn.disabled = false;
    loginBtnText.textContent = "Kirish";
  }
}

// Handle Register
async function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const registerBtn = document.getElementById("registerBtn");
  const registerBtnText = document.getElementById("registerBtnText");
  const registerError = document.getElementById("registerError");
  const registerErrorMsg = document.getElementById("registerErrorMsg");
  const registerSuccess = document.getElementById("registerSuccess");
  const registerSuccessMsg = document.getElementById("registerSuccessMsg");

  // Clear previous messages
  registerError.classList.add("hidden");
  registerSuccess.classList.add("hidden");

  // Disable button
  registerBtn.disabled = true;
  registerBtnText.textContent = "Yuklanmoqda...";

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success message
      registerSuccessMsg.textContent = `Xush kelibsiz, ${data.user.name}! Ro'yxatdan o'tish muvaffaqiyatli bo'ldi.`;
      registerSuccess.classList.remove("hidden");

      // Reset form
      document.getElementById("registerForm").reset();

      // Close modal after 2 seconds
      setTimeout(() => {
        closeAuthModal("register");
        updateNavbarForLoggedIn();
      }, 2000);
    } else {
      registerErrorMsg.textContent =
        data.message || "Ro'yxatdan o'tish muvaffaqiyatsiz bo'ldi";
      registerError.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Register error:", error);
    registerErrorMsg.textContent =
      "Server bilan aloqa o'rnatib bo'lmadi. Iltimos qayta urinib ko'ring.";
    registerError.classList.remove("hidden");
  } finally {
    // Enable button
    registerBtn.disabled = false;
    registerBtnText.textContent = "Ro'yxatdan o'tish";
  }
}

// Update navbar for logged in user
function updateNavbarForLoggedIn() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log("✅ Logged in as:", user.name);
    // You can update navbar here to show user profile, logout button, etc.
  }
}

// Check if user is logged in on page load
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  if (user) {
    updateNavbarForLoggedIn();
  }
});

// Hero animations
gsap.from(".hero-title", {
  duration: 2,
  y: 100,
  opacity: 0,
  stagger: 0.3,
  ease: "power4.out",
});

// Section animations
const sections = gsap.utils.toArray("section");
sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
