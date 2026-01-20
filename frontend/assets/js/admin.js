/**
 * ============================================
 * MAGZUNA ADMIN PANEL - Modern SaaS UI
 * Professional JavaScript for Admin Dashboard
 * ============================================
 */

const API_URL = "/api";
let socket = null;

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
  user: null,
  orders: [],
  users: [],
  currentOrderId: null,
  currentUserId: null,
  filters: {
    status: "all",
    search: "",
    dateFrom: "",
    dateTo: "",
  },
  userFilters: {
    search: "",
    role: "",
    status: "",
  },
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
  view: "table", // 'table' or 'cards'
  theme: localStorage.getItem("adminTheme") || "light",
};

// Status configurations
const STATUS_CONFIG = {
  new: { label: "Yangi", class: "status-new" },
  accepted: { label: "Qabul qilingan", class: "status-accepted" },
  progress: { label: "Jarayonda", class: "status-progress" },
  ready: { label: "Tayyor", class: "status-ready" },
  closed: { label: "Yopilgan", class: "status-closed" },
  cancelled: { label: "Bekor qilingan", class: "status-cancelled" },
  // Backend compatibility
  pending: { label: "Yangi", class: "status-new" },
  in_progress: { label: "Jarayonda", class: "status-progress" },
  completed: { label: "Tayyor", class: "status-ready" },
};

// ============================================
// DOM ELEMENTS
// ============================================
const DOM = {
  loginModal: () => document.getElementById("loginModal"),
  adminLayout: () => document.getElementById("adminLayout"),
  sidebar: () => document.getElementById("sidebar"),
  mobileOverlay: () => document.getElementById("mobileOverlay"),
  orderDrawer: () => document.getElementById("orderDrawer"),
  drawerOverlay: () => document.getElementById("drawerOverlay"),
  toastContainer: () => document.getElementById("toastContainer"),
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  checkAuth();
  setupEventListeners();
  setupKeyboardShortcuts();
});

function initTheme() {
  if (state.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = "fas fa-sun";
  }
}

// ============================================
// WEBSOCKET CONNECTION
// ============================================
function initWebSocket() {
  // Backend server URL (port 3000 da backend ishlaydi)
  const wsUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : window.location.origin;
  
  socket = io(wsUrl, {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });

  // Ulanganda
  socket.on('connect', () => {
    console.log('✅ WebSocket ulandi:', socket.id);
  });

  // Uzilganda
  socket.on('disconnect', () => {
    console.log('❌ WebSocket uzildi');
  });

  // Yangi zakaz kelganda
  socket.on('newOrder', (data) => {
    console.log('🔔 Yangi zakaz:', data);
    
    // Ovozli signal
    playNotificationSound();
    
    // Toast notification
    showOrderNotification(data.order);
    
    // Zakazlar ro'yxatini yangilash
    loadOrders();
    loadDashboard();
  });

  // Zakaz yangilanganda
  socket.on('orderUpdate', (data) => {
    console.log('📝 Zakaz yangilandi:', data);
    loadOrders();
  });

  // Xatolik
  socket.on('connect_error', (error) => {
    console.log('⚠️ WebSocket xatolik:', error.message);
  });
}

// Notification ovozi
function playNotificationSound() {
  try {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleBoAQFrN4LeBSQc+mtzWj1sKJHS54sySOx4xZ83mvYQ2CTJqz+y5dygFOYDe4qFbCQhLoeXJf0AEJIK/4pd0MhQ1gMHhnVkENIPF4pVuLRU3g8nmm1cOOYbJ5pVYDD+JzOaRUgxCjc/niE0JRpHS6IFGBUmU1eiASAVKltfnfUUCSpfZ5nhAAkqa3OVwOwNOnt/jaToEUqPi4mI1BFam5uFbMQVZqenePi0FXazu3DcpBWCu8towIwZksO/YLR0FZ7Tw1ScZBWu38dIhFQVvuvPOHBEGc77zyRgOBXbB9ccWCwV5xPfEEggFfMb5wg4GBX/J+8ALAwaBzPy9BwEGhM79ugQAAobR/rgCAAKI0v+3AgADitT/tQEBA4vV/7YBAQOM1/+1AQEE');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  } catch (e) {
    console.log('Ovoz ijro etilmadi');
  }
}

// Zakaz notification ko'rsatish
function showOrderNotification(order) {
  const container = DOM.toastContainer();
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast success order-notification";
  
  toast.innerHTML = `
    <div class="toast-icon" style="background: #3b82f6;">
      <i class="fas fa-bell" style="animation: ring 0.5s ease infinite;"></i>
    </div>
    <div class="toast-content">
      <h4>🎉 Yangi zakaz!</h4>
      <p><strong>${order?.customer || 'Mijoz'}</strong> - ${order?.service || 'Xizmat'}</p>
      <small style="color: var(--gray-400);">${order?.phone || ''}</small>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);

  // 8 soniyadan keyin o'chirish
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 8000);
  
  // Browser notification (ruxsat bo'lsa)
  if (Notification.permission === 'granted') {
    new Notification('Yangi zakaz!', {
      body: `${order?.customer || 'Mijoz'} - ${order?.service || 'Xizmat'}`,
      icon: '../assets/images/favicon.svg'
    });
  }
}

// Browser notification ruxsati so'rash
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

// ============================================
// AUTHENTICATION
// ============================================
function checkAuth() {
  const token = localStorage.getItem("adminToken");
  const user = localStorage.getItem("adminUser");

  if (token && user) {
    try {
      state.user = JSON.parse(user);
      if (state.user.role === "admin") {
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

function showLoginModal() {
  DOM.loginModal().classList.remove("hidden");
  DOM.adminLayout().style.display = "none";
}

function showAdminPanel() {
  DOM.loginModal().classList.add("hidden");
  DOM.adminLayout().style.display = "block";

  // Update user info in sidebar
  const sidebarUserName = document.getElementById("sidebarUserName");
  if (sidebarUserName) sidebarUserName.textContent = state.user.name;

  // Update settings form
  const settingsName = document.getElementById("settingsName");
  const settingsEmail = document.getElementById("settingsEmail");
  if (settingsName) settingsName.value = state.user.name;
  if (settingsEmail) settingsEmail.value = state.user.email;
  
  // WebSocket ulanishini boshlash
  initWebSocket();
  
  // Browser notification ruxsati
  requestNotificationPermission();
}

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

    localStorage.setItem("adminToken", data.token);
    localStorage.setItem("adminUser", JSON.stringify(data.user));
    state.user = data.user;

    showAdminPanel();
    loadDashboard();
    errorEl.classList.remove("show");
  } catch (error) {
    errorEl.querySelector("span").textContent = error.message;
    errorEl.classList.add("show");
  }
}

function logout() {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
  state.user = null;
  showLoginModal();
  showToast("Tizimdan chiqdingiz", "success");
}

// ============================================
// API HELPERS
// ============================================
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

// ============================================
// DASHBOARD
// ============================================
async function loadDashboard() {
  try {
    // Load orders first to calculate dynamic stats
    await loadOrders();

    // Load users to get count
    await loadUsers();

    // Calculate dynamic statistics from orders
    const totalOrders = state.orders.length;
    const newOrders = state.orders.filter(
      (o) => o.status === "pending" || o.status === "new",
    ).length;
    const completedOrders = state.orders.filter(
      (o) =>
        o.status === "ready" ||
        o.status === "completed" ||
        o.status === "closed",
    ).length;

    // Get users count from state
    const totalUsers = state.users.length;

    // Update dashboard stats with dynamic values
    updateElement("statTotalOrders", totalOrders);
    updateElement("statNewOrders", newOrders);
    updateElement("statCompletedOrders", completedOrders);
    updateElement("statTotalUsers", totalUsers);

    // Calculate and update percentages
    updateStatPercentage("statNewOrdersTrend", newOrders, totalOrders);
    updateStatPercentage(
      "statCompletedOrdersTrend",
      completedOrders,
      totalOrders,
    );

    // For total orders and users, show growth (placeholder - could be based on time comparison)
    updateStatTrend("statTotalOrdersTrend", totalOrders > 0 ? 100 : 0);
    updateStatTrend("statTotalUsersTrend", totalUsers > 0 ? 100 : 0);

    // Render recent orders (first 5)
    renderRecentOrders(state.orders.slice(0, 5));

    // Update badge
    updateOrdersBadge(newOrders);
  } catch (error) {
    console.error("Dashboard load error:", error);
    showToast(error.message, "error");
  }
}

// Update stat card percentage
function updateStatPercentage(elementId, count, total) {
  const trendEl = document.getElementById(elementId);
  if (!trendEl) return;

  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
  const spanEl = trendEl.querySelector("span");
  if (spanEl) {
    spanEl.textContent = `${percentage}%`;
  }

  // Update trend direction
  if (percentage > 0) {
    trendEl.classList.remove("down");
    trendEl.classList.add("up");
    const icon = trendEl.querySelector("i");
    if (icon) {
      icon.className = "fas fa-arrow-up";
    }
  }
}

// Update stat trend
function updateStatTrend(elementId, percentage) {
  const trendEl = document.getElementById(elementId);
  if (!trendEl) return;

  const spanEl = trendEl.querySelector("span");
  if (spanEl) {
    spanEl.textContent = percentage > 0 ? `${percentage}%` : "0%";
  }
}

function renderRecentOrders(orders) {
  const tbody = document.getElementById("recentOrdersTable");
  const countEl = document.getElementById("recentOrdersCount");

  if (countEl) countEl.textContent = `${orders.length} ta`;

  if (!tbody) return;

  if (orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--gray-500);">
          Hozircha zakazlar yo'q
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = orders
    .map(
      (order) => `
    <tr onclick="openOrderDrawer('${order.id}')" style="cursor: pointer;">
      <td><span class="order-id">#${order.id?.slice(-6) || "000000"}</span></td>
      <td>
        <div class="customer-cell">
          <div class="customer-avatar">${getInitials(order.user?.name || "M")}</div>
          <div class="customer-info">
            <h4>${order.user?.name || "Noma'lum"}</h4>
            <a href="tel:${order.phoneNumber}">${order.phoneNumber}</a>
          </div>
        </div>
      </td>
      <td>
        <div class="service-cell">
          <div class="service-icon"><i class="fas fa-briefcase"></i></div>
          <span class="service-name">${order.serviceName || "Xizmat"}</span>
        </div>
      </td>
      <td>
        <div class="date-cell">
          <div class="date">${formatDate(order.createdAt)}</div>
          <div class="time">${formatTime(order.createdAt)}</div>
        </div>
      </td>
      <td>${getStatusBadgeHTML(order.status)}</td>
      <td class="actions-cell">
        <button class="action-btn view" onclick="event.stopPropagation(); openOrderDrawer('${order.id}')" title="Ko'rish">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn call" onclick="event.stopPropagation(); window.open('tel:${order.phoneNumber}')" title="Qo'ng'iroq">
          <i class="fas fa-phone"></i>
        </button>
      </td>
    </tr>
  `,
    )
    .join("");
}

// ============================================
// ORDERS MANAGEMENT
// ============================================
async function loadOrders() {
  try {
    const orders = await apiRequest("/orders");
    state.orders = Array.isArray(orders) ? orders : orders.data || [];

    // Load stats
    try {
      const stats = await apiRequest("/orders/stats");
      updateOrderCounts(stats);
    } catch (e) {
      // Stats endpoint might not exist, calculate from orders
      updateOrderCountsFromOrders();
    }

    renderOrders();
  } catch (error) {
    console.error("Orders load error:", error);
    showToast(error.message, "error");
  }
}

function updateOrderCounts(stats) {
  updateElement("countAll", stats.total || state.orders.length);
  updateElement("countNew", stats.pending || 0);
  updateElement("countAccepted", stats.accepted || 0);
  updateElement("countProgress", stats.inProgress || stats.in_progress || 0);
  updateElement("countReady", stats.completed || stats.ready || 0);
  updateElement("countClosed", stats.closed || 0);
  updateElement("countCancelled", stats.cancelled || 0);
  updateElement("totalOrdersCount", `${stats.total || state.orders.length} ta`);
}

function updateOrderCountsFromOrders() {
  const counts = {
    all: state.orders.length,
    new: 0,
    pending: 0,
    accepted: 0,
    progress: 0,
    in_progress: 0,
    ready: 0,
    completed: 0,
    closed: 0,
    cancelled: 0,
  };

  state.orders.forEach((order) => {
    const status = order.status || "pending";
    if (counts[status] !== undefined) counts[status]++;
  });

  updateElement("countAll", counts.all);
  updateElement("countNew", counts.new + counts.pending);
  updateElement("countAccepted", counts.accepted);
  updateElement("countProgress", counts.progress + counts.in_progress);
  updateElement("countReady", counts.ready + counts.completed);
  updateElement("countClosed", counts.closed);
  updateElement("countCancelled", counts.cancelled);
  updateElement("totalOrdersCount", `${counts.all} ta`);
}

function renderOrders() {
  const { status, search, dateFrom, dateTo } = state.filters;

  let filteredOrders = [...state.orders];

  // Status filter
  if (status !== "all") {
    filteredOrders = filteredOrders.filter((order) => {
      const orderStatus = order.status || "pending";
      // Handle status mapping
      if (status === "new")
        return orderStatus === "new" || orderStatus === "pending";
      if (status === "progress")
        return orderStatus === "progress" || orderStatus === "in_progress";
      if (status === "ready")
        return orderStatus === "ready" || orderStatus === "completed";
      return orderStatus === status;
    });
  }

  // Search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.phoneNumber?.includes(search) ||
        order.user?.name?.toLowerCase().includes(searchLower) ||
        order.serviceName?.toLowerCase().includes(searchLower) ||
        order.description?.toLowerCase().includes(searchLower),
    );
  }

  // Date filter
  if (dateFrom) {
    const fromDate = new Date(dateFrom);
    filteredOrders = filteredOrders.filter(
      (order) => new Date(order.createdAt) >= fromDate,
    );
  }
  if (dateTo) {
    const toDate = new Date(dateTo);
    toDate.setHours(23, 59, 59, 999);
    filteredOrders = filteredOrders.filter(
      (order) => new Date(order.createdAt) <= toDate,
    );
  }

  // Pagination
  const { page, limit } = state.pagination;
  const total = filteredOrders.length;
  const startIndex = (page - 1) * limit;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + limit);

  // Update pagination info
  state.pagination.total = total;
  updateElement("showingFrom", total > 0 ? startIndex + 1 : 0);
  updateElement("showingTo", Math.min(startIndex + limit, total));
  updateElement("totalOrders", total);

  // Render based on view
  if (state.view === "table") {
    renderOrdersTable(paginatedOrders);
  } else {
    renderOrdersCards(paginatedOrders);
  }

  renderPagination();
}

function renderOrdersTable(orders) {
  const tbody = document.getElementById("ordersTableBody");
  const emptyState = document.getElementById("ordersEmptyState");
  const tableWrapper = document.getElementById("ordersTableView");
  const cardsView = document.getElementById("ordersCardsView");

  if (!tbody) return;

  // Show/hide views
  tableWrapper.style.display = "block";
  cardsView.classList.remove("active");

  if (orders.length === 0) {
    tbody.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  tbody.innerHTML = orders
    .map(
      (order) => `
    <tr onclick="openOrderDrawer('${order.id}')">
      <td><span class="order-id">#${order.id?.slice(-6) || "000000"}</span></td>
      <td>
        <div class="customer-cell">
          <div class="customer-avatar">${getInitials(order.user?.name || "M")}</div>
          <div class="customer-info">
            <h4>${order.user?.name || "Noma'lum"}</h4>
            <a href="tel:${order.phoneNumber}" onclick="event.stopPropagation();">${order.phoneNumber}</a>
          </div>
        </div>
      </td>
      <td>
        <div class="service-cell">
          <div class="service-icon"><i class="fas fa-briefcase"></i></div>
          <span class="service-name">${order.serviceName || "Xizmat"}</span>
        </div>
      </td>
      <td>
        <div class="date-cell">
          <div class="date">${formatDate(order.createdAt)}</div>
          <div class="time">${formatTime(order.createdAt)}</div>
        </div>
      </td>
      <td>
        <div class="status-wrapper">
          ${getStatusBadgeHTML(order.status, true)}
        </div>
      </td>
      <td class="actions-cell" onclick="event.stopPropagation();">
        <button class="action-btn view" onclick="openOrderDrawer('${order.id}')" title="Ko'rish">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn call" onclick="window.open('tel:${order.phoneNumber}')" title="Qo'ng'iroq">
          <i class="fas fa-phone"></i>
        </button>
        <button class="action-btn delete" onclick="confirmDeleteOrder('${order.id}')" title="O'chirish">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `,
    )
    .join("");
}

function renderOrdersCards(orders) {
  const cardsView = document.getElementById("ordersCardsView");
  const tableWrapper = document.getElementById("ordersTableView");
  const emptyState = document.getElementById("ordersEmptyState");

  if (!cardsView) return;

  // Show/hide views
  tableWrapper.style.display = "none";
  cardsView.classList.add("active");

  if (orders.length === 0) {
    cardsView.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  cardsView.innerHTML = orders
    .map(
      (order) => `
    <div class="order-card" onclick="openOrderDrawer('${order.id}')">
      <div class="order-card-header">
        <span class="order-card-id">#${order.id?.slice(-6) || "000000"}</span>
        ${getStatusBadgeHTML(order.status)}
      </div>
      <div class="order-card-customer">
        <div class="customer-avatar">${getInitials(order.user?.name || "M")}</div>
        <div class="customer-info">
          <h4>${order.user?.name || "Noma'lum"}</h4>
          <a href="tel:${order.phoneNumber}" onclick="event.stopPropagation();">${order.phoneNumber}</a>
        </div>
      </div>
      <div class="order-card-service">
        <div class="service-icon"><i class="fas fa-briefcase"></i></div>
        <span class="service-name">${order.serviceName || "Xizmat"}</span>
      </div>
      <div class="order-card-footer">
        <span class="order-card-date">
          <i class="fas fa-calendar" style="margin-right: 6px; opacity: 0.5;"></i>
          ${formatDate(order.createdAt)}
        </span>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderPagination() {
  const { page, limit, total } = state.pagination;
  const totalPages = Math.ceil(total / limit);
  const container = document.getElementById("paginationNumbers");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  if (!container) return;

  // Enable/disable prev/next buttons
  prevBtn.disabled = page <= 1;
  nextBtn.disabled = page >= totalPages;

  // Generate page numbers
  let html = "";
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, page + 2);

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="pagination-btn ${i === page ? "active" : ""}" onclick="goToPage(${i})">${i}</button>`;
  }

  container.innerHTML = html;
}

function goToPage(page) {
  state.pagination.page = page;
  renderOrders();
}

// ============================================
// ORDER DRAWER
// ============================================
function openOrderDrawer(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  state.currentOrderId = orderId;

  // Populate drawer
  updateElement("drawerOrderId", order.id?.slice(-6) || "000000");
  updateElement("drawerCustomerName", order.user?.name || "Noma'lum");

  const phoneEl = document.getElementById("drawerPhone");
  if (phoneEl) {
    phoneEl.innerHTML = `<a href="tel:${order.phoneNumber}">${order.phoneNumber}</a>`;
  }

  updateElement("drawerEmail", order.user?.email || "-");
  updateElement("drawerServiceName", order.serviceName || "-");
  updateElement("drawerDescription", order.description || "-");

  // Highlight current status
  const currentStatus = mapStatusToLocal(order.status);
  document.querySelectorAll("#orderDrawer .status-badge").forEach((btn) => {
    btn.style.opacity = btn.dataset.status === currentStatus ? "1" : "0.5";
    btn.style.transform =
      btn.dataset.status === currentStatus ? "scale(1.05)" : "scale(1)";
  });

  // Render timeline
  renderOrderTimeline(order);

  // Show drawer
  DOM.orderDrawer().classList.add("open");
  DOM.drawerOverlay().classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeOrderDrawer() {
  DOM.orderDrawer().classList.remove("open");
  DOM.drawerOverlay().classList.remove("show");
  document.body.style.overflow = "";
  state.currentOrderId = null;
}

function renderOrderTimeline(order) {
  const timeline = document.getElementById("orderTimeline");
  if (!timeline) return;

  const currentStatus = mapStatusToLocal(order.status);
  const statuses = ["new", "accepted", "progress", "ready", "closed"];
  const currentIndex = statuses.indexOf(currentStatus);

  timeline.innerHTML = statuses
    .map((status, index) => {
      const config = STATUS_CONFIG[status];
      const isCompleted = index < currentIndex;
      const isActive = index === currentIndex;

      return `
      <div class="timeline-item ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}">
        <h4>${config.label}</h4>
        <p>${isCompleted ? "Bajarildi" : isActive ? "Hozirgi holat" : "Kutilmoqda"}</p>
      </div>
    `;
    })
    .join("");
}

async function setOrderStatus(newStatus) {
  if (!state.currentOrderId) return;

  try {
    // Map local status to API status
    const apiStatus = mapStatusToAPI(newStatus);

    await apiRequest(`/orders/${state.currentOrderId}/status`, "PUT", {
      status: apiStatus,
    });

    showToast("Status yangilandi", "success");

    // Update local state
    const order = state.orders.find((o) => o.id === state.currentOrderId);
    if (order) {
      order.status = apiStatus;
    }

    // Update UI
    document.querySelectorAll("#orderDrawer .status-badge").forEach((btn) => {
      btn.style.opacity = btn.dataset.status === newStatus ? "1" : "0.5";
      btn.style.transform =
        btn.dataset.status === newStatus ? "scale(1.05)" : "scale(1)";
    });

    renderOrderTimeline(order);
    renderOrders();
    updateOrderCountsFromOrders();

    // Update badge
    const newOrdersCount = state.orders.filter(
      (o) => o.status === "pending" || o.status === "new",
    ).length;
    updateOrdersBadge(newOrdersCount);
  } catch (error) {
    showToast(error.message, "error");
  }
}

async function saveOrderChanges() {
  if (!state.currentOrderId) return;

  const comment = document.getElementById("orderComment")?.value;

  // If there's a comment, you might want to save it
  // For now, just close the drawer
  closeOrderDrawer();
  showToast("O'zgarishlar saqlandi", "success");
}

async function confirmDeleteOrder(orderId) {
  state.currentOrderId = orderId;

  const modal = document.getElementById("deleteModal");
  const confirmBtn = document.getElementById("confirmDeleteBtn");

  confirmBtn.onclick = async () => {
    try {
      await apiRequest(`/orders/${orderId}`, "DELETE");
      showToast("Zakaz o'chirildi", "success");
      closeDeleteModal();
      await loadOrders();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  modal.classList.add("show");
}

// ============================================
// USERS MANAGEMENT
// ============================================
async function loadUsers() {
  try {
    let endpoint = `/admin/users?page=${state.pagination.page}&limit=${state.pagination.limit}`;

    const response = await apiRequest(endpoint);
    state.users = response.data?.users || [];

    renderUsersTable();
    updateElement(
      "totalUsersCount",
      `${response.data?.total || state.users.length} ta`,
    );
  } catch (error) {
    console.error("Users load error:", error);
    showToast(error.message, "error");
  }
}

function getFilteredUsers() {
  let filtered = [...state.users];

  // Search filter
  if (state.userFilters.search) {
    const searchLower = state.userFilters.search.toLowerCase();
    filtered = filtered.filter(
      (user) =>
        user.name?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower),
    );
  }

  // Role filter
  if (state.userFilters.role) {
    filtered = filtered.filter((user) => user.role === state.userFilters.role);
  }

  // Status filter
  if (state.userFilters.status !== "") {
    const isActive = state.userFilters.status === "true";
    filtered = filtered.filter((user) => user.isActive === isActive);
  }

  return filtered;
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  if (!tbody) return;

  const filteredUsers = getFilteredUsers();

  // Update count
  updateElement("totalUsersCount", `${filteredUsers.length} ta`);

  if (filteredUsers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--gray-500);">
          Foydalanuvchilar topilmadi
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredUsers
    .map(
      (user) => `
    <tr>
      <td>
        <div class="customer-cell">
          <div class="customer-avatar">${getInitials(user.name)}</div>
          <div class="customer-info">
            <h4>${user.name}</h4>
          </div>
        </div>
      </td>
      <td style="color: var(--gray-600);">${user.email}</td>
      <td>
        <span class="status-badge ${user.role === "admin" ? "status-accepted" : "status-new"}" style="cursor: default;">
          ${user.role === "admin" ? "Admin" : "User"}
        </span>
      </td>
      <td>
        <span class="status-badge ${user.isActive ? "status-ready" : "status-cancelled"}" style="cursor: default;">
          ${user.isActive ? "Faol" : "Nofaol"}
        </span>
      </td>
      <td style="color: var(--gray-500);">${formatDate(user.createdAt)}</td>
      <td class="actions-cell">
        <button class="action-btn edit" onclick="editUser('${user.id}')" title="Tahrirlash">
          <i class="fas fa-pen"></i>
        </button>
        <button class="action-btn view" onclick="toggleUserStatus('${user.id}')" title="Status">
          <i class="fas fa-power-off"></i>
        </button>
        ${
          user.id !== state.user?.id
            ? `
          <button class="action-btn delete" onclick="confirmDeleteUser('${user.id}')" title="O'chirish">
            <i class="fas fa-trash"></i>
          </button>
        `
            : ""
        }
      </td>
    </tr>
  `,
    )
    .join("");
}

function openUserModal(userId = null) {
  const modal = document.getElementById("userModal");
  const title = document.getElementById("userModalTitle");
  const passwordField = document.getElementById("passwordField");
  const passwordInput = document.getElementById("userPassword");
  const passwordHint = document.getElementById("passwordHint");

  // Reset form
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
  document.getElementById("userFormError").style.display = "none";

  if (userId) {
    title.textContent = "Foydalanuvchini tahrirlash";
    passwordInput.removeAttribute("required");
    passwordHint.style.display = "block";
    loadUserForEdit(userId);
  } else {
    title.textContent = "Yangi foydalanuvchi";
    passwordInput.setAttribute("required", "");
    passwordHint.style.display = "none";
  }

  modal.classList.add("show");
}

function closeUserModal() {
  document.getElementById("userModal").classList.remove("show");
}

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

function editUser(userId) {
  openUserModal(userId);
}

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
      showToast("Foydalanuvchi yangilandi", "success");
    } else {
      if (!password) {
        throw new Error("Parol kiritilishi shart");
      }
      data.password = password;
      await apiRequest("/admin/users", "POST", data);
      showToast("Foydalanuvchi yaratildi", "success");
    }

    closeUserModal();
    loadUsers();
    loadDashboard();
  } catch (error) {
    errorEl.textContent = error.message;
    errorEl.style.display = "block";
  }
}

async function toggleUserStatus(userId) {
  try {
    await apiRequest(`/admin/users/${userId}/toggle-status`, "PUT");
    showToast("Status o'zgartirildi", "success");
    loadUsers();
  } catch (error) {
    showToast(error.message, "error");
  }
}

function confirmDeleteUser(userId) {
  state.currentUserId = userId;

  const modal = document.getElementById("deleteModal");
  const confirmBtn = document.getElementById("confirmDeleteBtn");

  confirmBtn.onclick = async () => {
    try {
      await apiRequest(`/admin/users/${userId}`, "DELETE");
      showToast("Foydalanuvchi o'chirildi", "success");
      closeDeleteModal();
      loadUsers();
      loadDashboard();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  modal.classList.add("show");
}

function closeDeleteModal() {
  document.getElementById("deleteModal").classList.remove("show");
}

// ============================================
// PROFILE & SETTINGS
// ============================================
async function handleProfileUpdate(e) {
  e.preventDefault();

  const name = document.getElementById("settingsName").value;

  try {
    await apiRequest(`/admin/users/${state.user.id}`, "PUT", { name });

    state.user.name = name;
    localStorage.setItem("adminUser", JSON.stringify(state.user));

    // Update sidebar
    const sidebarUserName = document.getElementById("sidebarUserName");
    if (sidebarUserName) sidebarUserName.textContent = name;

    showToast("Profil yangilandi", "success");
  } catch (error) {
    showToast(error.message, "error");
  }
}

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
    await apiRequest(`/admin/users/${state.user.id}`, "PUT", {
      password: newPassword,
    });
    showToast("Parol yangilandi", "success");
    document.getElementById("passwordForm").reset();
  } catch (error) {
    showToast(error.message, "error");
  }
}

// ============================================
// NAVIGATION
// ============================================
function showSection(section) {
  // Hide all sections
  document.querySelectorAll(".section-content").forEach((el) => {
    el.style.display = "none";
  });

  // Show selected section
  const sectionEl = document.getElementById(`${section}Section`);
  if (sectionEl) sectionEl.style.display = "block";

  // Update nav
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.section === section) {
      item.classList.add("active");
    }
  });

  // Update title
  const titles = {
    dashboard: { title: "Dashboard", subtitle: "Statistika va ma'lumotlar" },
    orders: { title: "Zakazlar", subtitle: "Barcha buyurtmalarni boshqarish" },
    users: { title: "Foydalanuvchilar", subtitle: "Tizim foydalanuvchilari" },
    settings: { title: "Sozlamalar", subtitle: "Profil va tizim sozlamalari" },
  };

  const titleInfo = titles[section] || { title: section, subtitle: "" };
  updateElement("pageTitle", titleInfo.title);
  updateElement("pageSubtitle", titleInfo.subtitle);

  // Load data
  if (section === "dashboard") loadDashboard();
  else if (section === "orders") loadOrders();
  else if (section === "users") loadUsers();

  // Close sidebar on mobile
  closeSidebar();
}

function toggleSidebar() {
  DOM.sidebar().classList.toggle("open");
  DOM.mobileOverlay().classList.toggle("show");
}

function closeSidebar() {
  DOM.sidebar().classList.remove("open");
  DOM.mobileOverlay().classList.remove("show");
}

// ============================================
// THEME
// ============================================
function toggleTheme() {
  const isDark = state.theme === "dark";
  state.theme = isDark ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("adminTheme", state.theme);

  const icon = document.getElementById("themeIcon");
  if (icon) icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  // Login form
  document
    .getElementById("adminLoginForm")
    ?.addEventListener("submit", handleLogin);

  // User form
  document
    .getElementById("userForm")
    ?.addEventListener("submit", handleUserSubmit);

  // Profile form
  document
    .getElementById("profileForm")
    ?.addEventListener("submit", handleProfileUpdate);

  // Password form
  document
    .getElementById("passwordForm")
    ?.addEventListener("submit", handlePasswordUpdate);

  // Navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      if (section) showSection(section);
    });
  });

  // Filter tabs
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      state.filters.status = tab.dataset.status;
      state.pagination.page = 1;
      renderOrders();
    });
  });

  // View toggle
  document.querySelectorAll(".view-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".view-toggle button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.view = btn.dataset.view;
      renderOrders();
    });
  });

  // Search
  const orderSearch = document.getElementById("orderSearchInput");
  if (orderSearch) {
    let timeout;
    orderSearch.addEventListener("input", (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        state.filters.search = e.target.value;
        state.pagination.page = 1;
        renderOrders();
      }, 300);
    });
  }

  // Date filters
  document.getElementById("dateFrom")?.addEventListener("change", (e) => {
    state.filters.dateFrom = e.target.value;
    state.pagination.page = 1;
    renderOrders();
  });

  document.getElementById("dateTo")?.addEventListener("change", (e) => {
    state.filters.dateTo = e.target.value;
    state.pagination.page = 1;
    renderOrders();
  });

  // Per page select
  document.getElementById("perPageSelect")?.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "all") {
      state.pagination.limit = 9999; // Show all orders
    } else {
      state.pagination.limit = parseInt(value);
    }
    state.pagination.page = 1;
    renderOrders();
  });

  // Pagination
  document.getElementById("prevPage")?.addEventListener("click", () => {
    if (state.pagination.page > 1) {
      state.pagination.page--;
      renderOrders();
    }
  });

  document.getElementById("nextPage")?.addEventListener("click", () => {
    const totalPages = Math.ceil(
      state.pagination.total / state.pagination.limit,
    );
    if (state.pagination.page < totalPages) {
      state.pagination.page++;
      renderOrders();
    }
  });

  // User filters
  const userSearch = document.getElementById("userSearchInput");
  if (userSearch) {
    let timeout;
    userSearch.addEventListener("input", (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        state.userFilters.search = e.target.value;
        renderUsersTable();
      }, 300);
    });
  }

  // Role filter
  const roleFilter = document.getElementById("roleFilter");
  if (roleFilter) {
    roleFilter.addEventListener("change", (e) => {
      state.userFilters.role = e.target.value;
      renderUsersTable();
    });
  }

  // Status filter (users)
  const statusFilter = document.getElementById("statusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      state.userFilters.status = e.target.value;
      renderUsersTable();
    });
  }

  // Escape key closes modals/drawers
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOrderDrawer();
      closeUserModal();
      closeDeleteModal();
    }
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("globalSearch")?.focus();
    }

    // Number keys for navigation
    if (e.altKey) {
      switch (e.key) {
        case "1":
          showSection("dashboard");
          break;
        case "2":
          showSection("orders");
          break;
        case "3":
          showSection("users");
          break;
        case "4":
          showSection("settings");
          break;
      }
    }
  });
}

function clearFilters() {
  state.filters = { status: "all", search: "", dateFrom: "", dateTo: "" };
  state.pagination.page = 1;

  document.getElementById("orderSearchInput").value = "";
  document.getElementById("dateFrom").value = "";
  document.getElementById("dateTo").value = "";

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.status === "all");
  });

  renderOrders();
}

// ============================================
// UTILITIES
// ============================================
function getInitials(name) {
  if (!name) return "XX";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function formatTime(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateElement(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function getStatusBadgeHTML(status, withIcon = false) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  const icon = withIcon ? '<i class="fas fa-chevron-down"></i>' : "";
  return `<span class="status-badge ${config.class}">${config.label}${icon}</span>`;
}

function mapStatusToLocal(apiStatus) {
  const mapping = {
    pending: "new",
    in_progress: "progress",
    completed: "ready",
  };
  return mapping[apiStatus] || apiStatus;
}

function mapStatusToAPI(localStatus) {
  const mapping = {
    new: "pending",
    progress: "in_progress",
    ready: "completed",
  };
  return mapping[localStatus] || localStatus;
}

function updateOrdersBadge(count) {
  const badge = document.getElementById("ordersBadge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = "success") {
  const container = DOM.toastContainer();
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    warning: "fa-exclamation-triangle",
  };

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${icons[type] || icons.success}"></i>
    </div>
    <div class="toast-content">
      <h4>${type === "error" ? "Xatolik" : type === "warning" ? "Ogohlantirish" : "Muvaffaqiyat"}</h4>
      <p>${message}</p>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================
// GLOBAL FUNCTIONS (for inline onclick)
// ============================================
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
window.toggleTheme = toggleTheme;
window.logout = logout;
window.loadDashboard = loadDashboard;
window.loadOrders = loadOrders;
window.openOrderDrawer = openOrderDrawer;
window.closeOrderDrawer = closeOrderDrawer;
window.setOrderStatus = setOrderStatus;
window.saveOrderChanges = saveOrderChanges;
window.confirmDeleteOrder = confirmDeleteOrder;
window.openUserModal = openUserModal;
window.closeUserModal = closeUserModal;
window.editUser = editUser;
window.toggleUserStatus = toggleUserStatus;
window.confirmDeleteUser = confirmDeleteUser;
window.closeDeleteModal = closeDeleteModal;
window.goToPage = goToPage;
window.clearFilters = clearFilters;
