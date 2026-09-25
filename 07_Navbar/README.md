# 🧭 React Navbar

A simple React application built with **React**, **Vite**, and **React Router DOM** that demonstrates how to create a **responsive navigation bar** and navigate between different pages using React Router.

## 🚀 Features

* Reusable Navbar component
* Navigation between different pages
* Client-side routing using React Router
* Navigation using `Link`
* Active route styling using `NavLink`
* Multiple navigation links
* Clean and beginner-friendly component structure
* No full page reload during navigation

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* JavaScript (ES6)
* HTML5
* CSS3

## 📂 Project Structure

```text
react-navbar/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project directory

```bash
cd react-navbar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Router DOM

```bash
npm install react-router-dom
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📚 Concepts Covered

### 🔹 Navbar Component

A **Navbar** is a navigation component that provides links to different sections or pages of an application.

It allows users to easily move between different routes.

Example:

```text
Navbar
 ├── Home
 ├── About
 ├── Students
 └── Contact
```

### 🔹 Reusable Component

The Navbar is created as a separate component so that it can be reused across different pages of the application.

**Reusable Component = Write once → Use in multiple places**

### 🔹 Link

`Link` is a React Router component used for navigation between routes without performing a full page reload.

Example:

```text
Home → /
About → /about
Contact → /contact
```

### 🔹 NavLink

`NavLink` is similar to `Link` but provides additional functionality to identify the **currently active route**.

This is useful for highlighting the active page in the Navbar.

Example:

```text
Current URL → /about

Home
About ← Active
Contact
```

### 🔹 React Router

React Router is used to connect the Navbar links with different pages of the application.

```text
User clicks Navbar link
        ↓
URL changes
        ↓
React Router finds matching route
        ↓
Corresponding page renders
```

### 🔹 Client-Side Navigation

Client-side navigation allows the application to change pages without completely reloading the browser.

This makes navigation faster and provides a smoother SPA experience.

## 🎯 Learning Outcome

Through this project, I learned how to:

* Create a reusable Navbar component
* Create navigation links in React
* Use `Link` for navigation
* Use `NavLink` for active route styling
* Connect Navbar links with React Router routes
* Navigate between different pages without page reload
* Structure React components properly

## 👨‍💻 Author

**Saiyam Kumar**

If you like this project, don't forget to ⭐ the repository!
