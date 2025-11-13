# CRUD Fullstack App

This is a **fullstack CRUD application** built with the **MERN stack**:

- **MongoDB**: For database
- **Express.js**: Backend API
- **React.js (Vite)**: Frontend
- **Node.js**: Server runtime

## Features

- Add, update, delete, and list users
- Fully responsive UI
- Inputs: Name, Email, Password, Age
- Secure API calls
- Scrollable user list

## Project Structure

crud-fullstack-app/
│
├── backend/ # Express.js backend
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env # contains MONGO_URI, PORT, FRONTEND_URL
│
├── frontend/ # React.js frontend (Vite)
│ ├── src/
│ ├── App.jsx
│ ├── api.js
│ ├── App.css
│ └── .env # contains VITE_API_URL
│
└── README.md

shell
Copy code

## Setup Instructions

### Backend

1. Navigate to backend:
```bash
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in backend/ with the following content:

ini
Copy code
MONGO_URI=<your-mongodb-uri>
PORT=5000
FRONTEND_URL=http://localhost:5173
Start the backend server:

bash
Copy code
npm run dev
Frontend
Navigate to frontend:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Create a .env file in frontend/ with the following content:

ini
Copy code
VITE_API_URL=http://localhost:5000
Start the frontend:

bash
Copy code
npm run dev
Git & Environment Security
Make sure .env files are added to .gitignore to avoid exposing sensitive credentials.

Example .gitignore snippet:

bash
Copy code
# Environment files
.env
Deployment
You can deploy the frontend on Netlify and the backend on Render or Railway.

Update the frontend .env with the deployed backend URL before building the frontend for production.

Usage
Open the frontend in your browser (default: http://localhost:5173)

Add a user using the form

Edit or delete users as needed

Scroll to see the full list if many users are present

yaml
Copy code

---

If you want, I can also create a **ready `.gitignore`** for both frontend and backend with proper `.env` security so you can push your project safely to GitHub.  

Do you want me to do that next?






