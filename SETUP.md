# MENGA MAGZUNA - Full Stack Application

A complete full-stack consulting website with modern frontend and robust NestJS backend.

## 📁 Project Structure

```
joncarter/
├── backend/              # NestJS REST API
│   ├── src/
│   │   ├── auth/        # Authentication module
│   │   ├── entities/    # Database entities
│   │   ├── main.ts      # Entry point
│   │   └── app.module.ts
│   ├── dist/            # Compiled JavaScript
│   ├── package.json
│   ├── .env             # Environment variables
│   └── README.md
│
└── joncarter/           # Frontend (Landing Page)
    ├── index.html       # Main page
    ├── assets/
    │   ├── css/
    │   ├── js/
    │   └── images/
    └── README.md
```

## 🚀 Quick Start

### 1. Start the Backend

```bash
cd backend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

**Backend URL:** `http://localhost:3000/api`

The backend will:

- ✅ Automatically create the PostgreSQL database and tables
- ✅ Start the API server with health check endpoint
- ✅ Enable CORS for frontend communication
- ✅ Set up JWT authentication routes at `/api/auth/register` and `/api/auth/login`

### 2. Start the Frontend

```bash
cd joncarter

# Option 1: Using Python 3
python -m http.server 3001

# Option 2: Using Node.js
npx http-server -p 3001

# Option 3: Using VS Code Live Server
# Right-click index.html → Open with Live Server
```

**Frontend URL:** `http://localhost:3001`

## ✅ What's Implemented

### Backend

- ✅ NestJS framework with TypeORM
- ✅ PostgreSQL database integration
- ✅ User authentication (registration & login)
- ✅ JWT token generation
- ✅ Password hashing with bcrypt
- ✅ Passport JWT strategy
- ✅ CORS configuration
- ✅ Health check endpoint (`/api/health`)
- ✅ Global API prefix

### Frontend

- ✅ Beautiful responsive landing page
- ✅ Modern Tailwind CSS design
- ✅ GSAP animations and scroll effects
- ✅ Navigation menu
- ✅ Services showcase
- ✅ Portfolio section
- ✅ Contact information
- ✅ Social media links
- ✅ Backend API connection check

## 📋 Features Ready to Build

- [ ] Login/Registration forms (UI created, backend ready)
- [ ] Newsletter subscription
- [ ] Contact form submissions
- [ ] Blog system
- [ ] Admin dashboard
- [ ] User profile management
- [ ] Payment integration
- [ ] Email notifications

## 🔐 Environment Variables

Backend `.env` file includes:

- `PORT=3000`
- `DB_HOST=localhost`
- `DB_USERNAME=postgres`
- `DB_PASSWORD=Ziyodilloh_06`
- `JWT_SECRET` for token signing
- `CORS_ORIGIN` for frontend

## 🛠️ Available Commands

### Backend

```bash
npm run dev              # Start development server
npm run build           # Compile TypeScript
npm run start           # Run compiled JavaScript
npm run migration:run   # Run database migrations
npm run migration:revert # Undo migrations
```

### Frontend

```bash
python -m http.server 3001   # Start local server
# Then open http://localhost:3001
```

## 📚 API Endpoints

### Health Check

- `GET /api/health` - Server status

### Authentication

- `POST /api/auth/register` - Create new user

  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "User Name"
  }
  ```

- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

## 📊 Database

PostgreSQL database with:

- `users` table with UUID primary key
- Timestamps (createdAt, updatedAt)
- Password hashing
- Email uniqueness constraint
- User roles (default: "user")

## 🎨 Frontend Technologies

- Tailwind CSS for styling
- GSAP for animations
- AOS for scroll animations
- Font Awesome for icons
- Vanilla JavaScript

## 🔗 Frontend-Backend Connection

The frontend is configured to connect to the backend API:

- Base URL: `http://localhost:3000/api`
- Health check performed on page load
- Ready for form submissions and API calls

## 📝 Notes

1. **Database**: Ensure PostgreSQL is running on localhost:5432
2. **CORS**: Configured to allow requests from `http://localhost:3001`
3. **JWT**: Used for stateless authentication
4. **Passwords**: Hashed with bcrypt (10 rounds)

## 🚀 Next Steps

1. Create login/registration modals in frontend
2. Connect form submissions to backend
3. Implement user profile pages
4. Add email verification
5. Create admin panel
6. Deploy to production

## 📧 Contact

For questions or issues, check the individual README files in `/backend` and `/joncarter` directories.

---

**Status**: ✅ Backend Ready | ✅ Frontend Ready | 🔄 Integration Ready
