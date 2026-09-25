# 📝 React Router

A simple React application built with **React**, **Vite**, and **React Router DOM** that demonstrates **routing and navigation in a Single Page Application (SPA)**. This project covers static routing, dynamic routing, nested routing, route parameters, navigation, protected routes, and more.

## 🚀 Features

* Client-side routing using React Router
* Static routing
* Dynamic routing using URL parameters
* Navigation using `Link`
* Active route styling using `NavLink`
* Nested routing
* Child routes using `Outlet`
* Programmatic navigation using `useNavigate()`
* Accessing URL parameters using `useParams()`
* Accessing current URL using `useLocation()`
* Working with query parameters using `useSearchParams()`
* Protected routes
* 404 / Not Found route
* Beginner-friendly React Router project

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* JavaScript (ES6)
* HTML5
* CSS3

## 📂 Project Structure

```text
react-router/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Students.jsx
│   │   ├── StudentDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
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
cd react-router
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

### 🔹 React Router

React Router is a library used to implement **routing and navigation** in React applications.

It allows different components to be displayed based on the URL without reloading the entire webpage.

### 🔹 Single Page Application (SPA)

A **Single Page Application** loads a single HTML page and dynamically changes the content when the user navigates.

```text
User clicks Link
      ↓
URL changes
      ↓
React Router finds matching route
      ↓
Corresponding component renders
      ↓
UI updates
```

The browser does not perform a complete page reload during internal navigation.

### 🔹 BrowserRouter

`BrowserRouter` provides routing functionality to the React application.

It uses the browser's URL to determine which route should be displayed.

### 🔹 Routes

`Routes` is a container that holds multiple `Route` components.

It checks the current URL and finds the matching route.

### 🔹 Route

A `Route` connects a URL path with a React component.

Example:

```text
/about → About
/contact → Contact
```

### 🔹 Static Routing

Static routing means the route has a fixed URL.

Example:

```text
/about
/contact
/students
```

### 🔹 Dynamic Routing

Dynamic routing is used when a part of the URL can change.

Example:

```text
/student/:id
```

Here `:id` represents a dynamic URL parameter.

### 🔹 useParams()

`useParams()` is a React Router hook used to get dynamic parameters from the URL.

Example:

```text
/student/101
```

Here:

```text
id = 101
```

`useParams()` can be used to access the value.

### 🔹 Link

`Link` is a React Router navigation component used for internal navigation.

It allows users to navigate between routes without a full page reload.

### 🔹 NavLink

`NavLink` is similar to `Link`, but it provides additional functionality for detecting the **currently active route**.

It is commonly used in navigation bars.

### 🔹 Nested Routing

Nested routing means creating routes inside another route.

Example:

```text
/dashboard
/dashboard/profile
/dashboard/settings
```

The child routes belong to the parent route.

### 🔹 Outlet

`Outlet` is used in nested routing to specify where the child route should be rendered inside the parent component.

```text
Parent Component
       ↓
    Outlet
       ↓
Child Component
```

### 🔹 useNavigate()

`useNavigate()` is a React Router hook used for **programmatic navigation**.

It is useful when navigation needs to happen after some action or logic.

Example:

```text
Login successful
      ↓
Navigate to Dashboard
```

### 🔹 useLocation()

`useLocation()` is a React Router hook used to get information about the current URL/location.

It can provide information such as:

* `pathname` → Current path
* `search` → Query parameters
* `hash` → URL hash

### 🔹 Query Parameters

Query parameters are values added to the URL after `?`.

Example:

```text
/products?category=shoes
```

Here:

```text
category → Parameter name
shoes    → Parameter value
```

Multiple query parameters can be added using `&`.

```text
/products?category=shoes&sort=price
```

### 🔹 useSearchParams()

`useSearchParams()` is a React Router hook used to get and modify query parameters in the URL.

Example:

```text
/products?category=shoes
```

```text
category → shoes
```

### 🔹 Protected Routes

A **Protected Route** is a route that can only be accessed when a certain condition is satisfied, usually when the user is authenticated.

Example:

```text
User tries to access /dashboard
              ↓
      Check authentication
          ↙       ↘
       Logged     Not Logged
          ↓           ↓
      Dashboard     Login
```

### 🔹 Navigate

`Navigate` is a React Router component used to redirect the user to another route.

It is commonly used with protected routes and authentication.

### 🔹 404 / Not Found Route

A 404 route handles URLs that do not match any defined route.

The `*` path is commonly used for unmatched URLs.

Example:

```text
/about → About
/contact → Contact
/xyz → Not Found
```

## 🔄 Route Parameters vs Query Parameters

### Route Parameter

Used as a dynamic part of the URL.

```text
/student/101
```

Retrieved using:

```text
useParams()
```

### Query Parameter

Used to provide additional information through the URL.

```text
/student?id=101
```

Retrieved using:

```text
useSearchParams()
```

## 🔄 Link vs NavLink

| Feature                | Link | NavLink |
| ---------------------- | ---- | ------- |
| Navigation             | ✅    | ✅       |
| No full page reload    | ✅    | ✅       |
| Active route detection | ❌    | ✅       |
| Useful for Navbar      | ✅    | ✅       |

## 🔄 useNavigate() vs Navigate

| Feature | useNavigate()           | Navigate                |
| ------- | ----------------------- | ----------------------- |
| Type    | Hook                    | Component               |
| Purpose | Programmatic navigation | Redirect                |
| Usage   | JavaScript logic        | Conditional/UI redirect |

## 🎯 Learning Outcome

Through this project, I learned how to:

* Implement routing in React applications
* Create static and dynamic routes
* Navigate between pages without reloading the browser
* Use `Link` and `NavLink` for navigation
* Work with dynamic URL parameters using `useParams()`
* Implement nested routes using `Outlet`
* Navigate programmatically using `useNavigate()`
* Access URL information using `useLocation()`
* Work with query parameters using `useSearchParams()`
* Implement protected routes
* Handle unknown URLs using a 404 route

## 👨‍💻 Author

**Saiyam Kumar**

If you like this project, don't forget to ⭐ the repository!
