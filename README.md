# Leleka Backend

This is the backend API for **Leleka**, a pregnancy tracking application designed to help expectant mothers track their journey, monitor baby development, and manage daily tasks and notes.

The application provides information about the baby's weekly growth (size, weight, development), tracks the mother's state, and offers tools like a personal diary and a to-do list.

## 🛠 Tech Stack

* **Runtime**: [Node.js](https://nodejs.org/)
* **Framework**: [Express.js](https://expressjs.com/)
* **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
* **Authentication**: JSON Web Token (JWT) with Access & Refresh tokens
* **Validation**: [Celebrate](https://github.com/arb/celebrate) / [Joi](https://joi.dev/)
* **File Storage**: [Cloudinary](https://cloudinary.com/) (via Multer)
* **Logging**: [Pino](https://github.com/pinojs/pino)
* **Email**: [Nodemailer](https://nodemailer.com/)

## ⚙️ Prerequisites

* Node.js (v18+ recommended)
* npm or yarn
* MongoDB connection string (Atlas or local)
* Cloudinary account (for image uploads)

## 🚀 Getting Started

### 1. Installation

Navigate to the backend directory and install dependencies:

```bash
cd leleka-backend
npm install

PORT=3000
MONGO_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
FRONTEND_URL=http://localhost:3000

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=2h
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d

# Cloudinary (Image Uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📂 Project Structure
```
src/
├── constants/      # Static constants (babySex, regex, etc.)
├── controllers/    # Request handlers (auth, diary, tasks, etc.)
├── db/             # Database connection logic
├── helper/         # Utility functions (cloudinary, wrappers)
├── middlewares/    # Express middlewares (auth, upload, error handling)
├── models/         # Mongoose schemas (User, Diary, BabyState, etc.)
├── routes/         # API Route definitions
├── services/       # Business logic (optional, if separated from controllers)
├── utils/          # Helpers like date formatting, pregnancy calculation
├── validations/    # Joi validation schemas
└── server.js       # App entry point
```

## 📡 Key API Endpoints

All routes are prefixed with `/api`.

* Auth: `/auth/register`, `/auth/login`, `/auth/logout`, `/auth/refresh`

* Users: `/users/current`, `/users/update`, `/users/avatar`

* Weeks: `/weeks` (all info), `/weeks/current` (based on due date)

* Tasks: `/tasks` (CRUD operations for to-do list)

* Diary: `/diaries` (CRUD for personal notes with images)
