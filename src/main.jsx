import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Project from "./Components/Project"
import Skill from "./Components/Skill"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element = {<App />}>
      <Route index element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='skill' element = {<Skill />} />
      <Route path='projects' element = {<Project />} />
      <Route path='contact' element = {<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
