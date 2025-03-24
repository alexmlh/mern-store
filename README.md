# MERN Store

This is a full-stack e-commerce web application built with the **MERN** (MongoDB, Express, React, Node.js) stack.

## 🌐 Live Demo
Check out the live version of the app: [MERN Store](https://mern-store-ezem.onrender.com/)

## 📦 Features
- 🛍️ Product management (CRUD operations)
- 🛒 Add to cart functionality
- 🛠️ REST API with Express & MongoDB
- 🎨 Responsive UI using React & Chakra UI
- ☁️ Hosted on **Render**

## 🚀 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/mern-store.git
cd mern-store
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the **backend** directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 4️⃣ Run the Application
#### Start Backend
```sh
cd backend
npm run dev
```
#### Start Frontend
```sh
cd frontend
npm run dev
```

## 🌍 Deployment
### Deploying Frontend on GitHub Pages
1. In **frontend/package.json**, add:
   ```json
   "homepage": "https://yourusername.github.io/mern-store"
   ```
2. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
3. Add scripts to **package.json**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy:
   ```sh
   npm run deploy
   ```

### Deploying Backend on Render
1. Push code to GitHub.
2. Create a **new web service** on [Render](https://render.com/).
3. Connect your **GitHub repository**.
4. Set **build command**:
   ```sh
   npm install && npm run build
   ```
5. Set **start command**:
   ```sh
   npm start
   ```
6. Add environment variables (same as `.env`).
7. Deploy!

## 📜 License
This project is licensed under the **MIT License**.

---
**Made with ❤️ using MERN.**

