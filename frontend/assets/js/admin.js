// Admin Panel JavaScript
const API_URL = "/api";

// State
let currentUser = null;
let currentPage = 1;
let currentLimit = 10;
let currentSearch = "";
let currentRoleFilter = "";
let currentStatusFilter = "";
let deleteUserId = null;

// DOM Elements
const loginModal = document.getElementById("loginModal");
const adminLayout = document.getElementById("adminLayout");
const sidebar = document.getElementById("sidebar");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  setupEventListeners();
});

// Check Authentication
function checkAuth() {
  const token = localStorage.getItem("adminToken");
  const user = localStorage.getItem("adminUser");

  if (token && user) {
    try {
      currentUser = JSON.parse(user);
      if (currentUser.role === "admin") {
        showAdminPanel();
        loadDashboard();
        return;
      }
    } catch (e) {
      console.error("Parse error:", e);
    }
  }

  showLoginModal();
}

// Show Login Modal
function showLoginModal() {
  loginModal.classList.remove("hidden");
  adminLayout.classList.add("hidden");
}

// Show Admin Panel
function showAdminPanel() {
  loginModal.classList.add("hidden");
  adminLayout.classList.remove("hidden");

  // Update user info
  document.getElementById("adminName").textContent = currentUser.name;
  document.getElementById("adminEmail").textContent = currentUser.email;

  // Settings
  document.getElementById("settingsName").value = currentUser.name;
  document.getElementById("settingsEmail").value = currentUser.email;
}

// Setup Event Listeners
function setupEventListeners() {
  // Login Form
  document
    .getElementById("adminLoginForm")
    .addEventListener("submit", handleLogin);

  // User Form
  document
    .getElementById("userForm")
    .addEventListener("submit", handleUserSubmit);

  // Profile Form
  document
    .getElementById("profileForm")
    .addEventListener("submit", handleProfileUpdate);

  // Password Form
  document
    .getElementById("passwordForm")
    .addEventListener("submit", handlePasswordUpdate);

  // Search & Filters
  let searchTimeout;
  document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearch = e.target.value;
      currentPage = 1;
      loadUsers();
    }, 300);
  });

  document.getElementById("roleFilter").addEventListener("change", (e) => {
    currentRoleFilter = e.target.value;
    currentPage = 1;
    loadUsers();
  });

  document.getElementById("statusFilter").addEventListener("change", (e) => {
    currentStatusFilter = e.target.value;
    currentPage = 1;
    loadUsers();
  });
}

// Handle Login
async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const errorEl = document.getElementById("loginError");

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login xatosi");
    }

    if (data.user.role !== "admin") {
      throw new Error("Admin huquqi talab qilinadi");
    }

    // Save to localStorage
    localStorage.setItem("adminToken", data.token);
    localStorage.setItem("adminUser", JSON.stringify(data.user));

    currentUser = data.user;
    showAdminPanel();
    loadDashboard();

    errorEl.classList.add("hidden");
  } catch (error) {
    errorEl.textContent = error.message;
    errorEl.classList.remove("hidden");
  }
}

// Logout
function logout() {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
  currentUser = null;
  showLoginModal();
}

// API Request Helper
async function apiRequest(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("adminToken");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      logout();
    }
    throw new Error(data.message || "Xatolik yuz berdi");
  }

  return data;
}

// Load Dashboard
async function loadDashboard() {
  try {
    const response = await apiRequest("/admin/dashboard");
    const stats = response.data;

    // Update stats
    document.getElementById("statTotalUsers").textContent = stats.totalUsers;
    document.getElementById("statActiveUsers").textContent = stats.activeUsers;
    document.getElementById("statAdminUsers").textContent = stats.adminUsers;
    document.getElementById("statNewUsersToday").textContent =
      stats.newUsersToday;
    document.getElementById("statNewUsersThisWeek").textContent =
      stats.newUsersThisWeek;
    document.getElementById("statNewUsersThisMonth").textContent =
      stats.newUsersThisMonth;

    // Update percentages
    const activePercent =
      stats.totalUsers > 0
        ? Math.round((stats.activeUsers / stats.totalUsers) * 100)
        : 0;
    const inactivePercent =
      stats.totalUsers > 0
        ? Math.round((stats.inactiveUsers / stats.totalUsers) * 100)
        : 0;

    document.getElementById("statActivePercent").textContent =
      activePercent + "%";
    document.getElementById("statInactivePercent").textContent =
      inactivePercent + "%";

    // Update progress bars
    const weekProgress =
      stats.totalUsers > 0
        ? (stats.newUsersThisWeek / stats.totalUsers) * 100
        : 0;
    const monthProgress =
      stats.totalUsers > 0
        ? (stats.newUsersThisMonth / stats.totalUsers) * 100
        : 0;

    document.getElementById("weekProgress").style.width =
      Math.min(weekProgress * 5, 100) + "%";
    document.getElementById("monthProgress").style.width =
      Math.min(monthProgress * 2, 100) + "%";

    // Load recent users
    const usersResponse = await apiRequest(
      "/admin/users?limit=5&sortBy=createdAt&sortOrder=DESC",
    );
    renderRecentUsers(usersResponse.data.users);
  } catch (error) {
    console.error("Dashboard load error:", error);
    showToast(error.message, "error");
  }
}

// Render Recent Users
function renderRecentUsers(users) {
  const tbody = document.getElementById("recentUsersTable");

  if (users.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-8 text-gray-500">
          Foydalanuvchilar topilmadi
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = users
    .map(
      (user) => `
    <tr>
      <td class="py-3 px-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <span class="text-red-600 font-semibold text-sm">${user.name.charAt(0).toUpperCase()}</span>
          </div>
          <span class="font-medium text-gray-900">${user.name}</span>
        </div>
      </td>
      <td class="py-3 px-4 text-gray-600">${user.email}</td>
      <td class="py-3 px-4">
        <span class="badge ${user.role === "admin" ? "badge-purple" : "badge-primary"}">
          ${user.role === "admin" ? "Admin" : "User"}
        </span>
      </td>
      <td class="py-3 px-4">
        <span class="badge ${user.isActive ? "badge-success" : "badge-danger"}">
          ${user.isActive ? "Faol" : "Nofaol"}
        </span>
      </td>
      <td class="py-3 px-4 text-gray-500 text-sm">${formatDate(user.createdAt)}</td>
    </tr>
  `,
    )
    .join("");
}

// Load Users
async function loadUsers() {
  try {
    let endpoint = `/admin/users?page=${currentPage}&limit=${currentLimit}`;

    if (currentSearch) {
      endpoint += `&search=${encodeURIComponent(currentSearch)}`;
    }
    if (currentRoleFilter) {
      endpoint += `&role=${currentRoleFilter}`;
    }
    if (currentStatusFilter) {
      endpoint += `&isActive=${currentStatusFilter}`;
    }

    const response = await apiRequest(endpoint);
    renderUsersTable(response.data);
    renderPagination(response.data);
  } catch (error) {
    console.error("Users load error:", error);
    showToast(error.message, "error");
  }
}

// Render Users Table
function renderUsersTable(data) {
  const tbody = document.getElementById("usersTableBody");

  if (data.users.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state">
            <i class="fas fa-users"></i>
            <h3>Foydalanuvchilar topilmadi</h3>
            <p>Qidiruv shartlarini o'zgartirib ko'ring</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = data.users
    .map(
      (user) => `
    <tr>
      <td class="py-4 px-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <span class="text-white font-semibold">${user.name.charAt(0).toUpperCase()}</span>
          </div>
          <span class="font-medium text-gray-900">${user.name}</span>
        </div>
      </td>
      <td class="py-4 px-6 text-gray-600">${user.email}</td>
      <td class="py-4 px-6">
        <span class="badge ${user.role === "admin" ? "badge-purple" : "badge-primary"}">
          <i class="fas ${user.role === "admin" ? "fa-shield-alt" : "fa-user"} mr-1"></i>
          ${user.role === "admin" ? "Admin" : "User"}
        </span>
      </td>
      <td class="py-4 px-6">
        <span class="badge ${user.isActive ? "badge-success" : "badge-danger"}">
          <i class="fas ${user.isActive ? "fa-check-circle" : "fa-times-circle"} mr-1"></i>
          ${user.isActive ? "Faol" : "Nofaol"}
        </span>
      </td>
      <td class="py-4 px-6 text-gray-500 text-sm">${formatDate(user.createdAt)}</td>
      <td class="py-4 px-6 text-right">
        <div class="flex items-center justify-end gap-2">
          <button onclick="editUser('${user.id}')" class="action-btn action-btn-edit" title="Tahrirlash">
            <i class="fas fa-pen"></i>
          </button>
          <button onclick="toggleUserStatus('${user.id}')" class="action-btn action-btn-toggle" title="Status o'zgartirish">
            <i class="fas fa-power-off"></i>
          </button>
          ${
            user.id !== currentUser.id
              ? `<button onclick="confirmDelete('${user.id}')" class="action-btn action-btn-delete" title="O'chirish">
              <i class="fas fa-trash"></i>
            </button>`
              : ""
          }
        </div>
      </td>
    </tr>
  `,
    )
    .join("");

  // Update showing info
  const from = (data.page - 1) * data.limit + 1;
  const to = Math.min(data.page * data.limit, data.total);
  document.getElementById("showingFrom").textContent = from;
  document.getElementById("showingTo").textContent = to;
  document.getElementById("totalUsers").textContent = data.total;
}

// Render Pagination
function renderPagination(data) {
  const container = document.getElementById("paginationButtons");
  let html = "";

  // Previous button
  html += `
    <button onclick="goToPage(${data.page - 1})" class="pagination-btn" ${data.page <= 1 ? "disabled" : ""}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  const startPage = Math.max(1, data.page - 2);
  const endPage = Math.min(data.totalPages, data.page + 2);

  for (let i = startPage; i <= endPage; i++) {
    html += `
      <button onclick="goToPage(${i})" class="pagination-btn ${i === data.page ? "active" : ""}">
        ${i}
      </button>
    `;
  }

  // Next button
  html += `
    <button onclick="goToPage(${data.page + 1})" class="pagination-btn" ${data.page >= data.totalPages ? "disabled" : ""}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  container.innerHTML = html;
}

// Go to Page
function goToPage(page) {
  currentPage = page;
  loadUsers();
}

// Show Section
function showSection(section) {
  // Hide all sections
  document.getElementById("dashboardSection").classList.add("hidden");
  document.getElementById("usersSection").classList.add("hidden");
  document.getElementById("settingsSection").classList.add("hidden");

  // Remove active from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Show selected section
  document.getElementById(`${section}Section`).classList.remove("hidden");

  // Set active nav link
  document.querySelector(`a[href="#${section}"]`).classList.add("active");

  // Update title
  const titles = {
    dashboard: "Dashboard",
    users: "Foydalanuvchilar",
    settings: "Sozlamalar",
  };
  document.getElementById("pageTitle").textContent = titles[section];

  // Load data if needed
  if (section === "dashboard") {
    loadDashboard();
  } else if (section === "users") {
    loadUsers();
  }

  // Close sidebar on mobile
  if (window.innerWidth < 1024) {
    sidebar.classList.remove("sidebar-open");
  }
}

// Toggle Sidebar
function toggleSidebar() {
  sidebar.classList.toggle("sidebar-open");
}

// User Modal
function openUserModal(userId = null) {
  const modal = document.getElementById("userModal");
  const title = document.getElementById("userModalTitle");
  const passwordField = document.getElementById("passwordField");
  const passwordInput = document.getElementById("userPassword");
  const passwordHint = document.getElementById("passwordHint");

  // Reset form
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
  document.getElementById("userFormError").classList.add("hidden");

  if (userId) {
    title.textContent = "Foydalanuvchini tahrirlash";
    passwordInput.removeAttribute("required");
    passwordHint.classList.remove("hidden");
    loadUserForEdit(userId);
  } else {
    title.textContent = "Yangi foydalanuvchi";
    passwordInput.setAttribute("required", "");
    passwordHint.classList.add("hidden");
  }

  modal.classList.remove("hidden");
}

function closeUserModal() {
  document.getElementById("userModal").classList.add("hidden");
}

// Load User for Edit
async function loadUserForEdit(userId) {
  try {
    const response = await apiRequest(`/admin/users/${userId}`);
    const user = response.data;

    document.getElementById("userId").value = user.id;
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;
    document.getElementById("userRole").value = user.role;
    document.getElementById("userActive").checked = user.isActive;
  } catch (error) {
    showToast(error.message, "error");
    closeUserModal();
  }
}

// Edit User
function editUser(userId) {
  openUserModal(userId);
}

// Handle User Submit
async function handleUserSubmit(e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const errorEl = document.getElementById("userFormError");

  const data = {
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
    role: document.getElementById("userRole").value,
    isActive: document.getElementById("userActive").checked,
  };

  const password = document.getElementById("userPassword").value;
  if (password) {
    data.password = password;
  }

  try {
    if (userId) {
      await apiRequest(`/admin/users/${userId}`, "PUT", data);
      showToast("Foydalanuvchi yangilandi");
    } else {
      if (!password) {
        throw new Error("Parol kiritilishi shart");
      }
      data.password = password;
      await apiRequest("/admin/users", "POST", data);
      showToast("Foydalanuvchi yaratildi");
    }

    closeUserModal();
    loadUsers();
    loadDashboard();
  } catch (error) {
    errorEl.textContent = error.message;
    errorEl.classList.remove("hidden");
  }
}

// Toggle User Status
async function toggleUserStatus(userId) {
  try {
    await apiRequest(`/admin/users/${userId}/toggle-status`, "PUT");
    showToast("Status o'zgartirildi");
    loadUsers();
    loadDashboard();
  } catch (error) {
    showToast(error.message, "error");
  }
}

// Delete User
function confirmDelete(userId) {
  deleteUserId = userId;
  document.getElementById("deleteModal").classList.remove("hidden");
  document.getElementById("confirmDeleteBtn").onclick = () => deleteUser();
}

function closeDeleteModal() {
  document.getElementById("deleteModal").classList.add("hidden");
  deleteUserId = null;
}

async function deleteUser() {
  if (!deleteUserId) return;

  try {
    await apiRequest(`/admin/users/${deleteUserId}`, "DELETE");
    showToast("Foydalanuvchi o'chirildi");
    closeDeleteModal();
    loadUsers();
    loadDashboard();
  } catch (error) {
    showToast(error.message, "error");
  }
}

// Handle Profile Update
async function handleProfileUpdate(e) {
  e.preventDefault();

  const name = document.getElementById("settingsName").value;

  try {
    await apiRequest(`/admin/users/${currentUser.id}`, "PUT", { name });

    currentUser.name = name;
    localStorage.setItem("adminUser", JSON.stringify(currentUser));
    document.getElementById("adminName").textContent = name;

    showToast("Profil yangilandi");
  } catch (error) {
    showToast(error.message, "error");
  }
}

// Handle Password Update
async function handlePasswordUpdate(e) {
  e.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword !== confirmPassword) {
    showToast("Parollar mos kelmaydi", "error");
    return;
  }

  if (newPassword.length < 6) {
    showToast("Parol kamida 6 ta belgidan iborat bo'lishi kerak", "error");
    return;
  }

  try {
    await apiRequest(`/admin/users/${currentUser.id}`, "PUT", {
      password: newPassword,
    });

    showToast("Parol yangilandi");
    document.getElementById("passwordForm").reset();
  } catch (error) {
    showToast(error.message, "error");
  }
}

// Toast Notification
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = document.getElementById("toastIcon");
  const msg = document.getElementById("toastMessage");

  msg.textContent = message;

  if (type === "error") {
    icon.className = "fas fa-exclamation-circle text-red-500";
  } else {
    icon.className = "fas fa-check-circle text-green-500";
  }

  toast.classList.add("toast-show");

  setTimeout(() => {
    toast.classList.remove("toast-show");
  }, 3000);
}

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("uz-UZ", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
