import Navbar from "./Components/Navbar"
import React from "react"
import "./App.css"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <div className="main h-screen w-screen relative">
        <Navbar /> 
        <Outlet />
    </div>
  )
}

export default App