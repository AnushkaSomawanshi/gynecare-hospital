# GyneCare Hospital Management System

> **Centre of Excellence in Women's Healthcare**  
> A production-ready, full-stack MERN hospital management platform purpose-built for gynecology-focused multi-branch hospitals in India.

Inspired by [Sahyadri Hospitals](https://www.sahyadrihospital.com/) and India's [Digital India ORS System](https://ors.gov.in/), GyneCare combines a rich public website, role-based dashboards, and gynecology-specific tracking modules into one cohesive platform.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Features](#3-features)
4. [Project Structure](#4-project-structure)
5. [Prerequisites](#5-prerequisites)
6. [Installation & Setup](#6-installation--setup)
   - [Step 1 — Clone the Repository](#step-1--clone-the-repository)
   - [Step 2 — Set Up the Backend](#step-2--set-up-the-backend-server)
   - [Step 3 — Set Up the Frontend](#step-3--set-up-the-frontend-client)
   - [Step 4 — Set Up MongoDB with MongoDB Compass](#step-4--set-up-mongodb-with-mongodb-compass)
   - [Step 5 — Seed the Database](#step-5--seed-the-database)
   - [Step 6 — Run the Application](#step-6--run-the-application)
7. [Environment Variables Reference](#7-environment-variables-reference)
8. [Demo Accounts](#8-demo-accounts)
9. [API Endpoints Reference](#9-api-endpoints-reference)
10. [Database Collections](#10-database-collections)
11. [Key Files Explained](#11-key-files-explained)
12. [Troubleshooting](#12-troubleshooting)
13. [Building for Production](#13-building-for-production)

---

## 1. Project Overview

GyneCare is a **comprehensive, full-stack MERN hospital management system** for a gynecology-focused, multi-branch hospital network in Maharashtra, India. It is designed for real-world use — not a demo — with proper authentication, role-based access, persistent MongoDB storage, and a full range of gynecology-specific patient tools.

### What makes GyneCare different?

- **Gynecology-first:** Includes a Pregnancy Tracker (week-by-week milestones), Menstrual Cycle Logger, IVF/Fertility module, and PCOS-specific health packages.
- **Multi-role system:** Separate, protected dashboards for Patients, Doctors, and Admins.
- **Multi-branch:** Supports 4 hospital branches across Maharashtra (Mumbai, Pune, Nashik, Nagpur).
- **Production-grade backend:** Modular Express.js API with JWT auth, bcrypt password hashing, Multer file uploads, Helmet security headers, and Mongoose ODM.
- **Real data seeded:** Doctors, hospitals, packages, blogs, and testimonials are pre-populated via a seed script — the app looks and works like a real hospital portal on first launch.

---

## 2. Tech Stack

| Layer            | Technology                                        | Version   |
| ---------------- | ------------------------------------------------- | --------- |
| **Frontend**     | React.js                                          | 18.x      |
| **Frontend**     | React Router DOM                                  | v6.x      |
| **Frontend**     | Axios (HTTP client)                               | 1.x       |
| **Frontend**     | Tailwind CSS                                      | 3.x       |
| **Frontend**     | Vite (build tool & dev server)                    | 4.x       |
| **Backend**      | Node.js                                           | 18+       |
| **Backend**      | Express.js                                        | 4.x       |
| **Database**     | MongoDB                                           | 6.x       |
| **Database ODM** | Mongoose                                          | 7.x       |
| **Auth**         | JWT (jsonwebtoken) + bcryptjs                     | 9.x / 2.x |
| **File Uploads** | Multer                                            | 1.x       |
| **Security**     | Helmet, CORS                                      | 7.x / 2.x |
| **Dev Tools**    | Nodemon, Morgan (HTTP logger), Express Validator  | Latest    |

---

## 3. Features

### Public Website
- Hero banner with animated stats counter (patients served, doctors, hospitals, years)
- Specialities grid with 12 gynecology departments (OB-GYN, IVF, Maternal-Fetal Medicine, PCOS, etc.)
- Doctor search with filters: city, speciality, rating, consultation fee
- Hospital listing by city with facilities, contact info, and maps
- Health packages with category filter and pricing
- Blog with article reader and rich HTML content
- Video library with modal player
- Blood availability table
- Lab services and home sample collection booking
- International patients section with cost comparison
- Career page with job listings and apply form
- Teleconsultation landing page
- Second opinion submission form
- About, Contact, Academics & CSR pages

### Appointment Booking (6-Step Wizard)
- **Step 1** — Select City
- **Step 2** — Select Hospital
- **Step 3** — Select Department
- **Step 4** — Choose Doctor (with profiles and availability)
- **Step 5** — Pick Date & Time (slot grid)
- **Step 6** — Confirm & Receive Appointment ID
- In-person vs. teleconsultation toggle
- Appointment data stored in MongoDB and visible in Patient Dashboard

### Patient Dashboard
- Overview with upcoming appointments and quick action cards
- Appointments tab: upcoming + past appointments with cancel option
- **Pregnancy Tracker:** LMP-based calculator, week-by-week fetal development milestones, weekly notes
- **Menstrual Cycle Logger:** Log cycles with symptoms, flow intensity, and view cycle history
- Medical Records: Upload reports (PDF/images), download, and delete
- Profile editor

### Doctor Dashboard
- Today's schedule view
- All appointments with status updater (Pending → Confirmed → Completed)
- Patient list
- Performance stats and patient reviews
- Profile editor

### Admin Dashboard
- Overview stats + recent appointments table
- User management — filter by role, view, delete
- Doctor management — add, edit, delete doctor profiles
- Appointment management across all statuses
- Health package toggle (active/inactive)
- Blog publish/unpublish/delete
- Report downloads

### Gynecology-Specific Modules
- Pregnancy tracker with LMP input and week-by-week milestone descriptions
- Menstrual cycle logger with symptom tracking and predicted ovulation window
- Fertility consultation booking flow
- Prenatal/postnatal care information pages
- Women's health blogs (PCOS, cervical cancer, IVF, first trimester guide)

---

## 4. Project Structure

```
gynecare-mern/
│
├── client/                              # ─── React Frontend (Vite) ───
│   ├── index.html                       # HTML entry point
│   ├── vite.config.js                   # Vite config (API proxy → localhost:5000)
│   ├── tailwind.config.js               # Tailwind design tokens
│   ├── postcss.config.js                # PostCSS config
│   ├── package.json
│   └── src/
│       ├── main.jsx                     # React entry point (renders <App />)
│       ├── App.jsx                      # Router config + protected route logic
│       ├── index.css                    # Tailwind base + custom utilities
│       │
│       ├── context/
│       │   └── AuthContext.jsx          # JWT auth state (login, logout, user)
│       │
│       ├── services/
│       │   └── api.js                   # Axios instance + all API call functions
│       │
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Layout.jsx           # App wrapper (Header + outlet + Footer)
│       │   │   ├── Header.jsx           # Sticky nav, mobile menu, user dropdown
│       │   │   └── Footer.jsx           # Multi-column footer with links
│       │   └── ui/
│       │       ├── DoctorCard.jsx       # Reusable doctor profile card
│       │       ├── PackageCard.jsx      # Health package card with pricing
│       │       ├── BlogCard.jsx         # Blog preview card
│       │       └── TestimonialCard.jsx  # Patient testimonial card
│       │
│       └── pages/
│           ├── Home.jsx                 # Rich homepage with all sections
│           ├── Login.jsx                # Password + OTP login tabs
│           ├── Register.jsx             # Multi-step patient registration
│           ├── FindDoctor.jsx           # Doctor search with filters
│           ├── Hospitals.jsx            # Hospital listing by city
│           ├── Specialities.jsx         # All 12 specialities
│           ├── HealthPackages.jsx       # Filterable package grid
│           ├── BookAppointment.jsx      # 6-step booking wizard
│           ├── Blogs.jsx                # Blog listing with categories
│           ├── BlogDetail.jsx           # Full article view with rich HTML
│           ├── About.jsx                # Hospital about page
│           ├── Contact.jsx              # Contact form + branch locations
│           ├── Labs.jsx                 # Lab services + home collection
│           ├── BloodAvailability.jsx    # Blood group availability by city
│           ├── Teleconsultation.jsx     # Teleconsultation info + booking
│           ├── InternationalPatients.jsx # Cost comparison + visa info
│           ├── Career.jsx               # Job listings + apply form
│           ├── AcademicsCsr.jsx         # Academics, research, CSR activities
│           ├── SecondOpinion.jsx        # Online second opinion submission
│           ├── Videos.jsx               # Video library with modal player
│           └── dashboard/
│               ├── PatientDashboard.jsx # 6-tab patient portal
│               ├── DoctorDashboard.jsx  # 5-tab doctor portal
│               └── AdminDashboard.jsx   # 7-tab admin panel
│
└── server/                              # ─── Node.js + Express Backend ───
    ├── server.js                        # Express app entry point
    ├── .env                             # Environment variables (create from .env.example)
    ├── .env.example                     # Template for .env
    ├── .gitignore
    ├── package.json
    │
    ├── config/
    │   └── db.js                        # MongoDB connection (Mongoose)
    │
    ├── models/                          # Mongoose schemas (MongoDB collections)
    │   ├── User.js                      # Users: patients, doctors, admins
    │   ├── Doctor.js                    # Doctor profiles, specialities, slots
    │   ├── Hospital.js                  # Hospital branches, facilities
    │   ├── Appointment.js               # All appointment records
    │   ├── Report.js                    # Uploaded medical report metadata
    │   ├── HealthPackage.js             # Health check-up packages
    │   ├── Blog.js                      # Blog articles
    │   ├── PregnancyData.js             # Patient pregnancy tracking records
    │   ├── MenstrualCycle.js            # Menstrual cycle log entries
    │   └── Testimonial.js              # Patient testimonials
    │
    ├── routes/                          # Express route handlers
    │   ├── auth.js                      # /api/auth
    │   ├── users.js                     # /api/users (admin)
    │   ├── doctors.js                   # /api/doctors
    │   ├── hospitals.js                 # /api/hospitals
    │   ├── appointments.js              # /api/appointments
    │   ├── healthPackages.js            # /api/packages
    │   ├── reports.js                   # /api/reports
    │   ├── pregnancyData.js             # /api/pregnancy
    │   ├── menstrualCycles.js           # /api/menstrual
    │   ├── blogs.js                     # /api/blogs
    │   └── testimonials.js              # /api/testimonials
    │
    ├── controllers/                     # Route handler logic (business logic)
    │   ├── authController.js
    │   ├── doctorController.js
    │   ├── hospitalController.js
    │   ├── appointmentController.js
    │   ├── reportController.js
    │   ├── packageController.js
    │   ├── blogController.js
    │   ├── pregnancyController.js
    │   ├── menstrualController.js
    │   └── testimonialController.js
    │
    ├── middleware/
    │   ├── auth.js                      # JWT token verification (protect middleware)
    │   ├── roles.js                     # Role-based access control (authorize middleware)
    │   └── upload.js                    # Multer file upload configuration
    │
    ├── utils/
    │   ├── generateToken.js             # JWT token creation utility
    │   └── seedData.js                  # Database seeder script
    │
    └── uploads/                         # Uploaded files directory (gitignored)
```

---

## 5. Prerequisites

Make sure you have all of the following installed **before** starting setup:

| Tool                  | Minimum Version | Download Link                                                              |
| --------------------- | --------------- | -------------------------------------------------------------------------- |
| **Node.js**           | v18.0.0+        | https://nodejs.org/en/download                                             |
| **npm**               | v9.0.0+         | Included with Node.js                                                      |
| **MongoDB Community** | v6.0+           | https://www.mongodb.com/try/download/community                             |
| **MongoDB Compass**   | Any recent      | https://www.mongodb.com/products/tools/compass                             |
| **Git**               | Any recent      | https://git-scm.com/downloads                                              |

### Verify your versions (run these in your terminal):

```bash
node --version       # Should output v18.x.x or higher
npm --version        # Should output 9.x.x or higher
git --version        # Should output git version 2.x.x
mongod --version     # Should output db version v6.x or v7.x
```

> **Windows users:** If `mongod` is not recognised, you may need to add MongoDB's `bin` folder to your system PATH. See the [MongoDB Windows install guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/).

---

## 6. Installation & Setup

Follow these steps **in order**. Do not skip any step.

---

### Step 1 — Clone the Repository

Open a terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
git clone https://github.com/AnushkaSomawanshi/gynecare-mern.git
cd gynecare-mern
```

You should now be inside the `gynecare-mern` folder, which contains two sub-folders: `client/` and `server/`.

---

### Step 2 — Set Up the Backend (Server)

```bash
# Navigate into the server folder
cd server

# Install all backend dependencies
npm install
```

This installs: Express, Mongoose, JWT, bcryptjs, Multer, Helmet, CORS, Morgan, and other packages.

#### Create the `.env` file

The backend requires environment variables. A template file `.env.example` is already provided.

**On Windows (Command Prompt):**
```cmd
copy .env.example .env
```

**On Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**On macOS / Linux:**
```bash
cp .env.example .env
```

Now open `.env` in any text editor (Notepad, VS Code, etc.) and verify its contents:

```env
# ─── Server Port ───────────────────────────────────────────────────────────
PORT=5000

# ─── MongoDB Connection ────────────────────────────────────────────────────
# This connects to a local MongoDB instance and uses the 'gynecare' database.
# The database will be created automatically when the seed script runs.
MONGO_URI=mongodb://localhost:27017/gynecare

# ─── JWT Secret ────────────────────────────────────────────────────────────
# This is used to sign and verify JWT tokens. Change this to a long random
# string in production. Example: openssl rand -hex 64
JWT_SECRET=your_jwt_secret_key_here_change_in_production

# ─── JWT Expiry ────────────────────────────────────────────────────────────
# How long before a JWT token expires. '7d' means 7 days.
JWT_EXPIRE=7d

# ─── Environment ───────────────────────────────────────────────────────────
# Set to 'production' when deploying to a live server.
NODE_ENV=development

# ─── Frontend URL (for CORS) ───────────────────────────────────────────────
# The URL your React frontend runs on. Change this if using a different port.
CLIENT_URL=http://localhost:3000
```

> **Important:** Never commit your `.env` file to version control. It is already listed in `.gitignore`.

---

### Step 3 — Set Up the Frontend (Client)

Open a **new terminal window** (keep the server terminal open or go back to the project root first):

```bash
# From the project root (gynecare-mern/)
cd client

# Install all frontend dependencies
npm install
```

This installs: React 18, React Router DOM v6, Axios, Tailwind CSS, and Vite.

> **No `.env` file needed for the frontend.** The `vite.config.js` already includes a proxy configuration that automatically forwards all `/api/*` requests to `http://localhost:5000`. This means your React app talks to the backend without needing to know the full URL.

---

### Step 4 — Set Up MongoDB with MongoDB Compass

#### 4a. Start MongoDB

You must start MongoDB before running the backend. Choose the instructions for your operating system:

---

**Windows — Method 1: As a Windows Service (Recommended)**

MongoDB usually installs as a Windows Service and may already be running. Check its status:

```cmd
net start MongoDB
```

If it's already running, you'll see: `The requested service has already been started.`  
If it's not running, the command will start it.

**Windows — Method 2: Start Manually**

```cmd
# Create the data directory first (if it doesn't exist)
mkdir C:\data\db

# Start MongoDB manually
mongod --dbpath "C:\data\db"
```

Keep this terminal window open — closing it will stop MongoDB.

---

**macOS — Using Homebrew (Recommended)**

```bash
# Start MongoDB as a background service (restarts automatically on reboot)
brew services start mongodb-community

# Check that it's running
brew services list
```

You should see `mongodb-community` with status `started`.

**macOS — Start Manually**

```bash
mongod --config /usr/local/etc/mongod.conf --fork
```

---

**Linux (Ubuntu/Debian)**

```bash
# Start MongoDB service
sudo systemctl start mongod

# Enable auto-start on system boot (optional but recommended)
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

You should see `Active: active (running)` in green.

---

#### 4b. Connect with MongoDB Compass

MongoDB Compass is a visual GUI that lets you view and browse your database. Follow these steps:

1. Open **MongoDB Compass** on your computer.
2. On the home screen, click **"+ New Connection"** (or it may show a connection string input box).
3. In the connection string field, enter exactly:
   ```
   mongodb://localhost:27017
   ```
4. Click the **"Connect"** button (green).
5. You should see the connection succeed and a list of existing databases on the left sidebar.

> **Note:** The `gynecare` database will **not appear yet** — it is created automatically when you run the seed script in the next step.

---

### Step 5 — Seed the Database

The seed script populates your empty MongoDB with realistic sample data so the app looks and works like a real hospital portal immediately.

```bash
# Make sure you are in the server/ directory
cd server

# Run the seed script
npm run seed
```

#### What the seed script creates:

| Category      | Count | Details                                                                              |
| ------------- | ----- | ------------------------------------------------------------------------------------ |
| Admin users   | 1     | `admin@gynecare.com`                                                                 |
| Patient users | 3     | `patient1`, `patient2`, `patient3` @gynecare.com                                    |
| Doctor users  | 3     | Dr. Priya Sharma, Dr. Anita Desai, Dr. Sunita Rao                                   |
| Doctor profiles | 3   | Full profiles: speciality, qualifications, bio, fees, ratings, availability slots   |
| Hospitals     | 4     | GyneCare Mumbai Central, Pune, Nashik, Nagpur — with full address & facilities      |
| Health Packages | 5   | Women's Wellness, Pregnancy Care Plus, Fertility Assessment, Cancer Screening, PCOS |
| Blog Articles | 4     | PCOS guide, First Trimester guide, IVF guide, Cervical Cancer prevention            |
| Testimonials  | 5     | Verified patient reviews linked to departments                                      |

#### Expected console output after a successful seed:

```
✅ Connected to MongoDB
🗑️  Cleared existing data

✅ Seed completed successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Summary:
   👤 Admin users:    1  (admin@gynecare.com / Admin@123)
   🤒 Patient users:  3  (patient1-3@gynecare.com / Patient@123)
   👩‍⚕️ Doctor users:  3  (dr.priya, dr.anita, dr.sunita @gynecare.com / Doctor@123)
   🏥 Hospitals:      4  (Mumbai, Pune, Nashik, Nagpur)
   📦 Packages:       5
   📝 Blogs:          4  (published)
   💬 Testimonials:   5  (approved)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

After seeding, open MongoDB Compass and refresh — you will now see the `gynecare` database with all 10 collections populated.

> **Warning:** Running `npm run seed` again will **delete all existing data** and re-create it fresh. Don't run it again if you've added custom data you want to keep.

---

### Step 6 — Run the Application

You need **two terminal windows running simultaneously** — one for the backend and one for the frontend.

#### Terminal 1 — Start the Backend (Express API)

```bash
# Navigate to the server folder
cd server

# Start the backend with auto-reload on file changes (nodemon)
npm run dev
```

**Expected output:**

```
🏥 GyneCare Hospital API
🚀 Server running in development mode on port 5000
📡 API Base URL: http://localhost:5000/api
📁 Uploads served at: http://localhost:5000/uploads
```

The backend API is now live at `http://localhost:5000/api`.

#### Terminal 2 — Start the Frontend (React + Vite)

Open a **new terminal window** and run:

```bash
# Navigate to the client folder
cd client

# Start the Vite development server
npm run dev
```

**Expected output:**

```
  VITE v4.x.x  ready in ~400ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

#### Open the Application

Open your browser and go to:

**`http://localhost:3000`**

The GyneCare homepage will load. All API calls are automatically proxied to the backend. You can log in using any of the demo accounts in the next section.

#### Quick-Reference URLs

| Service               | URL                                         |
| --------------------- | ------------------------------------------- |
| Frontend              | http://localhost:3000                        |
| Backend API           | http://localhost:5000/api                    |
| Backend Health Check  | http://localhost:5000/api/health             |
| MongoDB (Compass)     | mongodb://localhost:27017                    |
| Database name         | gynecare                                    |
| Uploaded files        | http://localhost:5000/uploads/\<filename\>   |

---

## 7. Environment Variables Reference

All variables live in `server/.env`. The frontend requires **no** environment variables.

| Variable     | Default Value                                    | Description                                                                 |
| ------------ | ------------------------------------------------ | --------------------------------------------------------------------------- |
| `PORT`       | `5000`                                           | Port the Express server listens on                                          |
| `MONGO_URI`  | `mongodb://localhost:27017/gynecare`             | Full MongoDB connection string. Change this for a remote MongoDB Atlas URI. |
| `JWT_SECRET` | `your_jwt_secret_key_here_change_in_production`  | Secret key used to sign/verify JWT tokens. Use a long random string.       |
| `JWT_EXPIRE` | `7d`                                             | Token expiry duration. Accepts: `7d`, `24h`, `60m`, etc.                   |
| `NODE_ENV`   | `development`                                    | Environment mode. Set to `production` for live deployments.                |
| `CLIENT_URL` | `http://localhost:3000`                          | Frontend URL. Used by Express CORS to allow requests from this origin.     |

---

## 8. Demo Accounts

These accounts are created by the seed script. Use them to log in and explore each role's features.

| Role      | Email                    | Password     | Dashboard URL                          |
| --------- | ------------------------ | ------------ | -------------------------------------- |
| **Admin** | admin@gynecare.com       | `Admin@123`  | http://localhost:3000/dashboard/admin  |
| Patient   | patient1@gynecare.com    | `Patient@123`| http://localhost:3000/dashboard/patient|
| Patient   | patient2@gynecare.com    | `Patient@123`| http://localhost:3000/dashboard/patient|
| Patient   | patient3@gynecare.com    | `Patient@123`| http://localhost:3000/dashboard/patient|
| Doctor    | dr.priya@gynecare.com    | `Doctor@123` | http://localhost:3000/dashboard/doctor |
| Doctor    | dr.anita@gynecare.com    | `Doctor@123` | http://localhost:3000/dashboard/doctor |
| Doctor    | dr.sunita@gynecare.com   | `Doctor@123` | http://localhost:3000/dashboard/doctor |

> **OTP Login Demo:** The OTP login flow simulates sending a one-time password. For the demo, use the code **`123456`** as the OTP on the Login page's OTP tab.

---

## 9. API Endpoints Reference

Base URL: `http://localhost:5000/api`

All protected endpoints require the header:
```
Authorization: Bearer <your_jwt_token>
```

---

### `/api/auth` — Authentication

| Method | Endpoint               | Auth Required | Description                                     |
| ------ | ---------------------- | ------------- | ----------------------------------------------- |
| POST   | `/api/auth/register`   | No            | Register a new patient account                  |
| POST   | `/api/auth/login`      | No            | Login with email and password, returns JWT       |
| POST   | `/api/auth/login/otp`  | No            | Send OTP to phone number (simulated)            |
| POST   | `/api/auth/verify-otp` | No            | Verify OTP and return JWT                        |
| POST   | `/api/auth/logout`     | Yes           | Invalidate session (client clears token)         |
| GET    | `/api/auth/me`         | Yes           | Get current authenticated user's profile        |
| PUT    | `/api/auth/change-password` | Yes      | Change password (requires current password)     |

---

### `/api/doctors` — Doctors

| Method | Endpoint                  | Auth Required   | Description                             |
| ------ | ------------------------- | --------------- | --------------------------------------- |
| GET    | `/api/doctors`            | No              | List all doctors (supports query filters) |
| GET    | `/api/doctors/top`        | No              | Get top-rated doctors                   |
| GET    | `/api/doctors/:id`        | No              | Get a single doctor's full profile      |
| GET    | `/api/doctors/:id/slots`  | No              | Get available appointment slots         |
| POST   | `/api/doctors`            | Yes (Admin)     | Create a new doctor profile             |
| PUT    | `/api/doctors/:id`        | Yes (Admin/Doctor) | Update a doctor's profile            |
| DELETE | `/api/doctors/:id`        | Yes (Admin)     | Delete a doctor                         |

**Query parameters for `GET /api/doctors`:**

| Parameter    | Type   | Example                | Description                        |
| ------------ | ------ | ---------------------- | ---------------------------------- |
| `speciality` | string | `IVF & Fertility`      | Filter by department               |
| `city`       | string | `Mumbai`               | Filter by hospital city            |
| `minRating`  | number | `4.5`                  | Minimum star rating                |
| `maxFee`     | number | `1500`                 | Maximum consultation fee (₹)       |
| `page`       | number | `1`                    | Page number for pagination         |
| `limit`      | number | `10`                   | Results per page                   |

---

### `/api/hospitals` — Hospitals

| Method | Endpoint                   | Auth Required | Description                            |
| ------ | -------------------------- | ------------- | -------------------------------------- |
| GET    | `/api/hospitals`           | No            | List all hospital branches             |
| GET    | `/api/hospitals/cities`    | No            | Get list of available cities           |
| GET    | `/api/hospitals/:id`       | No            | Get full details for one hospital      |
| POST   | `/api/hospitals`           | Yes (Admin)   | Create a new hospital branch           |
| PUT    | `/api/hospitals/:id`       | Yes (Admin)   | Update hospital details                |

---

### `/api/appointments` — Appointments

| Method | Endpoint                           | Auth Required     | Description                            |
| ------ | ---------------------------------- | ----------------- | -------------------------------------- |
| GET    | `/api/appointments`                | Yes               | Get all appointments for logged-in user|
| POST   | `/api/appointments`                | Yes (Patient)     | Book a new appointment                 |
| GET    | `/api/appointments/:id`            | Yes               | Get single appointment details         |
| PATCH  | `/api/appointments/:id/cancel`     | Yes (Patient)     | Cancel an appointment                  |
| PATCH  | `/api/appointments/:id/status`     | Yes (Doctor/Admin)| Update appointment status              |
| GET    | `/api/appointments/admin/all`      | Yes (Admin)       | Get all appointments (admin view)      |

---

### `/api/packages` — Health Packages

| Method | Endpoint               | Auth Required | Description                            |
| ------ | ---------------------- | ------------- | -------------------------------------- |
| GET    | `/api/packages`        | No            | List all active health packages         |
| GET    | `/api/packages/:id`    | No            | Get full details for a package          |
| POST   | `/api/packages`        | Yes (Admin)   | Create a new health package             |
| PUT    | `/api/packages/:id`    | Yes (Admin)   | Update package (price, tests, status)   |

---

### `/api/reports` — Medical Reports

| Method | Endpoint            | Auth Required | Description                                      |
| ------ | ------------------- | ------------- | ------------------------------------------------ |
| GET    | `/api/reports`      | Yes           | Get all reports uploaded by logged-in patient    |
| POST   | `/api/reports`      | Yes (Patient) | Upload a new report file (multipart/form-data)   |
| GET    | `/api/reports/:id`  | Yes           | Download/view a single report                    |
| DELETE | `/api/reports/:id`  | Yes (Patient) | Delete a report                                  |

---

### `/api/pregnancy` — Pregnancy Tracker

| Method | Endpoint                   | Auth Required   | Description                                  |
| ------ | -------------------------- | --------------- | -------------------------------------------- |
| GET    | `/api/pregnancy`           | Yes (Patient)   | Get the current pregnancy record             |
| POST   | `/api/pregnancy`           | Yes (Patient)   | Create or update pregnancy record (LMP date) |
| POST   | `/api/pregnancy/notes`     | Yes (Patient)   | Add a weekly note/milestone entry            |
| DELETE | `/api/pregnancy/:id`       | Yes (Patient)   | Delete a pregnancy record                    |

---

### `/api/menstrual` — Menstrual Cycle Tracker

| Method | Endpoint                | Auth Required   | Description                            |
| ------ | ----------------------- | --------------- | -------------------------------------- |
| GET    | `/api/menstrual`        | Yes (Patient)   | Get all cycle log entries              |
| POST   | `/api/menstrual`        | Yes (Patient)   | Log a new menstrual cycle              |
| PUT    | `/api/menstrual/:id`    | Yes (Patient)   | Update an existing cycle log           |
| DELETE | `/api/menstrual/:id`    | Yes (Patient)   | Delete a cycle log entry               |

---

### `/api/blogs` — Blog Articles

| Method | Endpoint           | Auth Required | Description                            |
| ------ | ------------------ | ------------- | -------------------------------------- |
| GET    | `/api/blogs`       | No            | List all published blog articles        |
| GET    | `/api/blogs/:id`   | No            | Get full content of one blog article    |
| POST   | `/api/blogs`       | Yes (Admin)   | Create and publish a new blog post      |
| PUT    | `/api/blogs/:id`   | Yes (Admin)   | Update/edit a blog post                 |
| DELETE | `/api/blogs/:id`   | Yes (Admin)   | Delete a blog post                      |

---

### `/api/testimonials` — Testimonials

| Method | Endpoint                  | Auth Required | Description                              |
| ------ | ------------------------- | ------------- | ---------------------------------------- |
| GET    | `/api/testimonials`       | No            | Get all approved testimonials            |
| POST   | `/api/testimonials`       | Yes (Patient) | Submit a new testimonial for review      |
| PUT    | `/api/testimonials/:id`   | Yes (Admin)   | Approve or edit a testimonial            |
| DELETE | `/api/testimonials/:id`   | Yes (Admin)   | Delete a testimonial                     |

---

### `/api/users` — User Management (Admin Only)

| Method | Endpoint             | Auth Required | Description                              |
| ------ | -------------------- | ------------- | ---------------------------------------- |
| GET    | `/api/users`         | Yes (Admin)   | List all users (filter by role)          |
| GET    | `/api/users/:id`     | Yes (Admin)   | Get a single user's profile              |
| PUT    | `/api/users/:id`     | Yes (Admin)   | Update a user's details or role          |
| DELETE | `/api/users/:id`     | Yes (Admin)   | Delete a user account                    |

---

## 10. Database Collections

After seeding, open **MongoDB Compass**, connect to `mongodb://localhost:27017`, and select the `gynecare` database. You'll see these 10 collections:

| Collection        | Description                                      | Key Fields                                                      |
| ----------------- | ------------------------------------------------ | --------------------------------------------------------------- |
| `users`           | All users: patients, doctors, and admins         | `name`, `email`, `password` (hashed), `role`, `phone`          |
| `doctors`         | Doctor profiles linked to user accounts          | `userId`, `speciality`, `qualifications`, `experience`, `rating`, `availableSlots` |
| `hospitals`       | Hospital branch details                          | `name`, `address` (city, pincode), `facilities`, `doctorIds`   |
| `appointments`    | All appointment bookings                         | `patientId`, `doctorId`, `hospitalId`, `date`, `time`, `status`|
| `healthpackages`  | Health check-up packages with pricing            | `name`, `price`, `originalPrice`, `tests[]`, `category`, `isPopular` |
| `reports`         | Medical report file metadata                     | `patientId`, `filename`, `fileUrl`, `uploadedAt`               |
| `pregnancydatas`  | Patient pregnancy tracking records               | `patientId`, `lmpDate`, `dueDate`, `currentWeek`, `notes[]`    |
| `menstrualcycles` | Menstrual cycle log entries                      | `patientId`, `startDate`, `endDate`, `flow`, `symptoms[]`      |
| `blogs`           | Blog articles with rich HTML content             | `title`, `content`, `category`, `author`, `isPublished`, `viewCount` |
| `testimonials`    | Patient reviews and testimonials                 | `patientName`, `content`, `rating`, `department`, `isApproved` |

---

## 11. Key Files Explained

Understanding these core files will help you extend or debug the application.

| File                                   | Purpose                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `client/src/context/AuthContext.jsx`   | Manages global authentication state using React Context. Stores the JWT token in `localStorage`, provides `login()`, `logout()`, and `user` to all components. |
| `client/src/services/api.js`           | The single Axios instance for the entire frontend. Sets the base URL (`/api`), attaches the JWT token to every request via an interceptor, and exports all API call functions. |
| `client/src/App.jsx`                   | React Router configuration. Defines all routes including protected routes (PrivateRoute wrapper checks `AuthContext` before rendering a page). |
| `server/server.js`                     | Express application entry point. Registers all middleware (Helmet, CORS, Morgan, body parser), mounts all API routes, sets up static file serving for uploads, and starts the HTTP server. |
| `server/config/db.js`                  | Mongoose connection to MongoDB. Reads `MONGO_URI` from `.env`, connects once at startup, and logs connection success or failure. |
| `server/middleware/auth.js`            | JWT verification middleware (`protect`). Extracts the Bearer token from the `Authorization` header, verifies it using `JWT_SECRET`, and attaches the decoded user to `req.user`. |
| `server/middleware/roles.js`           | Role-based access control (`authorize`). Used after `protect` to restrict certain routes to specific roles (e.g., `authorize('admin')`, `authorize('doctor', 'admin')`). |
| `server/middleware/upload.js`          | Multer configuration for file uploads. Sets storage destination to `server/uploads/`, validates file types (PDF, images), and enforces a 10MB file size limit. |
| `server/utils/seedData.js`             | Database seeder. Drops all collections, then creates fresh sample data: 7 users, 4 hospitals, 3 doctor profiles, 5 packages, 4 blogs, and 5 testimonials. Run with `npm run seed`. |
| `server/utils/generateToken.js`        | Creates a signed JWT for a given user ID. Called after successful login or registration. |
| `client/vite.config.js`               | Vite dev server configuration. The `proxy` setting forwards all `/api/*` requests to `http://localhost:5000`, allowing React to call the backend without CORS issues during development. |

---

## 12. Troubleshooting

### Problem 1: "MongoServerError: connect ECONNREFUSED 127.0.0.1:27017"

**Cause:** MongoDB is not running.

**Solution:**

```bash
# Windows — start MongoDB service
net start MongoDB

# macOS — start with Homebrew
brew services start mongodb-community

# Linux — start with systemctl
sudo systemctl start mongod

# Verify it's running by opening MongoDB Compass and connecting to mongodb://localhost:27017
```

---

### Problem 2: "Cannot find module '...'" or "Error: Cannot find module 'express'"

**Cause:** npm packages are not installed in the correct folder.

**Solution:** Make sure you run `npm install` separately in **both** `server/` and `client/`:

```bash
# In the project root
cd server && npm install
cd ../client && npm install
```

---

### Problem 3: Frontend shows a blank page or "Network Error" in browser

**Cause:** The backend server is not running, so API calls fail.

**Solution:**

1. Make sure Terminal 1 is running `npm run dev` in `server/`
2. Check that you see `🚀 Server running on port 5000` in that terminal
3. Visit `http://localhost:5000/api/health` — you should see `{"success":true,"status":"OK",...}`
4. Then refresh the frontend at `http://localhost:3000`

---

### Problem 4: "JsonWebTokenError: jwt malformed" or "Not authorized, no token"

**Cause:** The JWT token stored in localStorage is corrupted or from a different environment.

**Solution:** Clear the browser's localStorage and log in again:

1. Open **DevTools** in your browser (press `F12` or `Cmd+Option+I` on Mac)
2. Go to the **Application** tab → expand **Local Storage** → click `http://localhost:3000`
3. Find and delete the entries: `gynecare_token` and `gynecare_user`
4. Refresh the page and log in again with a demo account

---

### Problem 5: File uploads not working (reports page shows error)

**Cause:** The `server/uploads/` directory may not exist.

**Solution:**

```bash
# From the server/ directory
mkdir uploads
```

Or check that the `uploads/` folder exists inside `server/`. Create it manually if needed (the folder is gitignored so it won't appear after a fresh clone).

---

### Problem 6: "Error: listen EADDRINUSE: address already in use :::5000" or port 3000 in use

**Cause:** Another process is already using the port.

**Solution:**

```bash
# Mac/Linux — find and kill the process on port 5000
lsof -ti :5000 | xargs kill -9

# Windows (PowerShell) — find the process
netstat -ano | findstr :5000
# Then kill it by PID (replace 12345 with actual PID):
taskkill /PID 12345 /F
```

Or simply change the port in `server/.env`:

```env
PORT=5001
```

And update `client/vite.config.js`:

```js
proxy: {
  '/api': 'http://localhost:5001'
}
```

---

### Problem 7: "CORS Error" or "Access-Control-Allow-Origin" error in browser console

**Cause:** The `CLIENT_URL` in `server/.env` doesn't match the URL your frontend is running on.

**Solution:** Make sure your `.env` has:

```env
CLIENT_URL=http://localhost:3000
```

And verify the Vite dev server is running on port 3000 (check Terminal 2's output). If it started on a different port, update `CLIENT_URL` accordingly and restart the backend.

---

## 13. Building for Production

When you're ready to deploy or share the app, build the React frontend into static files:

```bash
# From the client/ directory
npm run build
```

This creates an optimized production build in `client/dist/`.

You can then serve the frontend from Express (so you only need one server process in production):

```js
// Add this to the bottom of server/server.js (before the error handler)
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // For any route that isn't an API route, serve the React index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
}
```

Then start the backend only:

```bash
# Production mode (uses node instead of nodemon)
NODE_ENV=production node server.js
```

Open your browser to `http://localhost:5000` — both the frontend and API will be served from the same port.

---

## License

© 2024 GyneCare Hospital. All rights reserved.

---

*Built with ❤️ for women's healthcare in India.*
