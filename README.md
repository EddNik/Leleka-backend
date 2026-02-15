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

### 1. Clone the repository

```bash
git clone [https://github.com/YehorStepanov/04-team-final-project-backend.git](https://github.com/YehorStepanov/04-team-final-project-backend.git)
cd 04-team-final-project-backend
npm install
cp .env.example .env

PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
FRONTEND_URL=http://localhost:5173 # Or your deployed frontend URL

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secrets (if applicable based on auth implementation)
# JWT_SECRET=...
# JWT_REFRESH_SECRET=...

npm run dev

npm start
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
