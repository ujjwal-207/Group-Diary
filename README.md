# Group Diary

**Group Diary** is a collaborative diary application built using **Next.js** and **LiveDocs**. It allows users to create or join groups and share diary entries in a private environment, making it ideal for families, friends, or project teams.

## 🚀 Features

- User authentication (Sign up / Login)
- Create and join diary groups
- Write, edit, and delete entries within groups
- Group-based privacy and access control
- Modern responsive UI

## 🛠 Tech Stack

- **Framework**: Next.js (React-based)
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Cookies
- **Styling**: Tailwind CSS

## 📦 Installation & Setup

### Prerequisites

- Node.js >= 14
- npm or yarn
- MongoDB (Atlas or local)

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/ujjwal-207/Group-Diary.git
cd Group-Diary
npm install
# or
yarn install
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
npm run dev
# or
yarn dev

Group-Diary/
├── components/       # Reusable UI components
├── lib/              # DB connection and utility functions
├── models/           # Mongoose schemas
├── pages/            # Next.js pages and API routes
├── public/           # Static files
├── styles/           # Global styles
├── .env.local        # Environment variables
├── next.config.js    # Configuration
└── README.md         # Project info

