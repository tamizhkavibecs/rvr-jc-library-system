# 📘 RVR JC College Library Availability System

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Tech Stack](https://img.shields.io/badge/stack-MERN-green)
![Status](https://img.shields.io/badge/status-Final--Year--Project-orange)

An intelligent, web-based solution for **RVR JC College** students to check book availability in real-time. This system bridges the gap between the physical library and students, reducing wait times and improving resource accessibility.

---

## 🎯 Project Objective

Students often struggle to find if a specific academic book is available or which shelf it belongs to. This system provides:

- ✅ **Real-time Availability:** Know if a book is in stock before walking to the library.
- ✅ **Departmental Filtering:** View books curated for CSE, Data Science, or CAC.
- ✅ **Admin Control:** A dedicated panel for librarians to manage inventory.

---

## 🛠️ Technology Stack

| Layer        | Technology                       |
| :----------- | :------------------------------- |
| **Frontend** | ⚛️ React.js (v18+)               |
| **Styling**  | 🎨 Bootstrap 5 & React Icons     |
| **Backend**  | 🟢 Node.js & Express.js          |
| **Database** | 🍃 MongoDB (Compass)             |
| **Security** | 🔐 JWT & Bcrypt Password Hashing |

---

## 🚀 Local Environment Setup

Follow these steps to get the project running on your machine.

### 📦 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/rvr-jc-library.git

# Install Backend dependencies
cd backend
npm install

# Install Frontend dependencies
cd ../frontend
npm install

🍃 2. Database Configuration (MongoDB Compass)
Open MongoDB Compass and click Connect.
Create a new database named: rvrjc_library.
Create two collections: users and books.
🔑 3. Environment Variables
Inside the backend folder, create a file named .env:

PORT=5000
MONGO_URI=mongodb://localhost:27017/rvrjc_library
JWT_SECRET=rvr_jc_secret_key_2024

🏃 4. Run the Application
Terminal 1 (Backend):
cd backend
node server.js

Terminal 2 (Frontend):
cd frontend
npm start

🧪 Postman API Guide (User Registration)
Since the system uses encrypted passwords, use Postman to create your accounts.
👤 Register a Student
URL: POST http://localhost:5000/api/auth/register
Body (JSON):

{
    "name": "Rahul Kumar",
    "student_id": "Y20DS001",
    "department": "Data Science",
    "password": "studentpassword",
    "role": "student"
}

🔑 Register an Admin
URL: POST http://localhost:5000/api/auth/register
Body (JSON):

{
    "name": "Library Admin",
    "student_id": "admin01",
    "department": "Library",
    "password": "adminpassword",
    "role": "admin"
}

📊 Mock Data (Books)
To populate the system, insert this JSON into your books collection in MongoDB Compass:
[
  {"title": "Intro to Data Science", "author": "Joel Grus", "category": "Data Science", "department": "Data Science", "total_copies": 10, "available_copies": 8},
  {"title": "Python Crash Course", "author": "Eric Matthes", "category": "Programming", "department": "Common", "total_copies": 15, "available_copies": 2},
  {"title": "Hands-On Machine Learning", "author": "Aurelien Geron", "category": "AI", "department": "Data Science", "total_copies": 5, "available_copies": 0},
  {"title": "Modern Operating Systems", "author": "Andrew Tanenbaum", "category": "Computer Science", "department": "Computer Science", "total_copies": 12, "available_copies": 12},
  {"title": "Computer Networking", "author": "James Kurose", "category": "Networking", "department": "Computer Science", "total_copies": 8, "available_copies": 4},
  {"title": "Deep Learning", "author": "Ian Goodfellow", "category": "AI", "department": "Data Science", "total_copies": 6, "available_copies": 6},
  {"title": "Java: The Complete Reference", "author": "Herbert Schildt", "category": "Programming", "department": "Common", "total_copies": 20, "available_copies": 15},
  {"title": "Database System Concepts", "author": "Silberschatz", "category": "Database", "department": "Computer Science", "total_copies": 10, "available_copies": 1},
  {"title": "Practical Statistics for DS", "author": "Peter Bruce", "category": "Mathematics", "department": "Data Science", "total_copies": 5, "available_copies": 5},
  {"title": "Cloud Computing Bible", "author": "Barrie Sosinsky", "category": "Modern Tech", "department": "Computer Science", "total_copies": 7, "available_copies": 3}
]

🎨 UI Features
🟢 Available Badge: Displayed when copies > 5.
🟡 Limited Copies: Displayed when 1-5 copies remain.
🔴 Not Available: Displayed when copies = 0.
🔍 Instant Search: Filter books by Name or Author.
📱 Responsive: Works on mobile and desktop browsers
📁 Folder Structure

📂 library-system
├── 📂 backend
│   ├── 📂 models    # User.js, Book.js (Database Schemas)
│   ├── 📂 routes    # auth.js, books.js (API Logic)
│   └── server.js    # Entry Point
└── 📂 frontend
    ├── 📂 public
    └── 📂 src
        ├── 📂 components # Navbar.js, ProtectedRoute.js
        ├── 📂 pages      # Login.js, Dashboard.js, AdminPanel.js
        └── App.js        # Main Router

📜 License
Distributed under the MIT License. Created for the students of RVR JC College.
```
