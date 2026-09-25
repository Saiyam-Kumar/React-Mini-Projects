**Routes**
**Routes** is a container that holds multiple **Route** components.
It checks the current URL and finds the matching route.

**Nested Routing**
**Nested Routing** means creating routes inside another route.
It is useful when multiple pages belong to a common parent route.

Example:
/dashboard → Dashboard
/dashboard/profile → Profile
/dashboard/settings → Settings

**Outlet**
**Outlet** is used in nested routing to specify where the child route should be rendered inside the parent component.

Parent Component
      ↓
   Outlet
      ↓
Child Component

**Outlet = Placeholder for the child route**

**useNavigate()**
**useNavigate()** is a React Router hook used to navigate programmatically from one route to another.

It is useful when navigation needs to happen after some action or logic.

Example:
Login successful → Navigate to /dashboard

**Link → Navigation through UI**
**useNavigate() → Navigation through JavaScript logic**

**Navigate**
**Navigate** is a React Router component used to redirect the user to another route.

It is commonly used for authentication and protected routes.

Example:
User not logged in
      ↓
Tries to access /dashboard
      ↓
Redirect to /login

**Navigate = Redirect to another route**

**Protected Route**
A **Protected Route** is a route that can only be accessed when a certain condition is satisfied, usually when the user is authenticated.

Example:
/dashboard → Only logged-in users

Flow:
User requests protected page
      ↓
Check authentication
      ↓
Logged in → Allow access
Not logged in → Redirect to Login

**Protected Route = Restrict access to certain routes**

**404 / Not Found Route**
A **404 route** is used when the user enters a URL that does not match any defined route.

The `*` path is used to match all unmatched URLs.

Example:
/about → About
/contact → Contact
/xyz → Not Found

**404 Route = Handles unknown/unmatched URLs**

**useLocation()**
**useLocation()** is a React Router hook used to get information about the current URL/location.

It can provide information such as:

`pathname` → Current path
`search` → Query parameters
`hash` → URL hash

Example:
If URL = /about
`location.pathname` → /about

**useLocation() = Get information about the current URL**

**Query Parameters**
**Query parameters** are values added to the URL after `?`.

Example:
/products?category=shoes

Here:
`category` → Parameter name
`shoes` → Parameter value

Multiple query parameters can be added using `&`.

Example:
/products?category=shoes&sort=price

**Query Parameters = Additional information passed through the URL**

**useSearchParams()**
**useSearchParams()** is a React Router hook used to get and modify query parameters in the URL.

Example:
/products?category=shoes

`category` → shoes

**useSearchParams() = Work with query parameters**

**Route Parameters vs Query Parameters**

**Route Parameter**
Used when the value is an important part of identifying a resource.

Example:
/student/101

Here `101` is a dynamic route parameter.

Created using:
`:id`

Retrieved using:
`useParams()`

**Query Parameter**
Used to provide additional information or options.

Example:
/students?course=cse

Retrieved using:
`useSearchParams()`

**Route Parameter**
/student/101

**Query Parameter**
/student?id=101

**useParams() vs useSearchParams()**

`useParams()` → Gets dynamic parameters from the route.

`useSearchParams()` → Gets query parameters from the URL.

Example:

`/student/:id` → `useParams()`

`/student?id=101` → `useSearchParams()`

**useNavigate() vs Navigate**

`useNavigate()` is a **hook** used to navigate programmatically.

`Navigate` is a **component** used to redirect the user.

**useNavigate() → Navigation function**

**Navigate → Redirect component**

**Link vs NavLink**

`Link` is used for navigation between routes.

`NavLink` is similar to `Link` but can detect the **currently active route**.

`Link` → Navigation

`NavLink` → Navigation + Active route detection

**React Router Flow**

User clicks Link
      ↓
URL changes
      ↓
BrowserRouter detects URL
      ↓
Routes checks available routes
      ↓
Matching Route is found
      ↓
Corresponding component renders
      ↓
UI updates

**Important React Router Hooks**

`useParams()` → Get dynamic route parameters

`useNavigate()` → Navigate programmatically

`useLocation()` → Get current URL/location information

`useSearchParams()` → Get and modify query parameters

**Important React Router Components**

`BrowserRouter` → Provides routing functionality

`Routes` → Contains Route components

`Route` → Maps URL to a component

`Link` → Navigate between routes

`NavLink` → Navigate + active route detection

`Outlet` → Displays child route

`Navigate` → Redirect to another route
