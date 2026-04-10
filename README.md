# gynecare-hospital

GyneCare Hospital — a MERN stack (MongoDB + Express + React + Node.js) web application for a women's health hospital platform.

## Architecture

```
gynecare-hospital/
  src/
    frontend/    # React + Vite (TypeScript)
    backend/     # Node.js + Express + MongoDB (TypeScript)
```

## Prerequisites

- Node.js ≥ 18
- pnpm (frontend) — `npm install -g pnpm`
- npm (backend)
- MongoDB running locally on default port `27017`

## Getting Started

### 1. Clone and install

```bash
# From repo root
# Install frontend deps
cd src/frontend && pnpm install

# Install backend deps
cd ../backend && npm install
```

### 2. Configure backend environment

```bash
cd src/backend
cp .env.example .env
# Edit .env to set MONGO_URI, JWT_SECRET, PORT as needed
```

### 3. Seed the database

```bash
cd src/backend
npm run seed
```

This creates demo users, doctors, hospitals, and blogs in MongoDB.

**Demo accounts** (email / password):
| Role    | Email             | Password   |
|---------|-------------------|------------|
| Patient | patient@demo.in   | demo1234   |
| Doctor  | doctor@demo.in    | demo1234   |
| Admin   | admin@demo.in     | demo1234   |

### 4. Run locally

**Terminal 1 — Backend**
```bash
cd src/backend
npm run dev
# Starts on http://localhost:5000
```

**Terminal 2 — Frontend**
```bash
cd src/frontend
cp .env.example .env    # optional; defaults to http://localhost:5000
pnpm dev
# Opens http://localhost:5173
```

## API Endpoints

| Method | Path                         | Auth     | Description                  |
|--------|------------------------------|----------|------------------------------|
| POST   | `/api/auth/register`         | —        | Create account               |
| POST   | `/api/auth/login`            | —        | Login, returns JWT token     |
| GET    | `/api/auth/me`               | JWT      | Current user profile         |
| GET    | `/api/doctors`               | —        | List doctors (filters: `location`, `speciality`, `search`) |
| GET    | `/api/doctors/:id`           | —        | Doctor by ID                 |
| GET    | `/api/hospitals`             | —        | List hospitals               |
| GET    | `/api/hospitals/:id`         | —        | Hospital by ID               |
| GET    | `/api/appointments`          | JWT      | My appointments              |
| POST   | `/api/appointments`          | JWT      | Book appointment             |
| PATCH  | `/api/appointments/:id/cancel` | JWT    | Cancel appointment           |
| GET    | `/api/blogs`                 | —        | List blog posts              |
| GET    | `/api/blogs/:id`             | —        | Blog post by ID              |

## Environment Variables

### Backend (`src/backend/.env`)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/gynecare
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

### Frontend (`src/frontend/.env`)
```
VITE_API_URL=http://localhost:5000
```

