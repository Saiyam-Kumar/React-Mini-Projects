import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      )
    },
    {
      path: "/user/:name",
      element: (
        <>
          <Navbar />
          <User />
        </>
      )
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App