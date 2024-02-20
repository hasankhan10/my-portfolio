import Navbar from "./Components/Navbar"
import React from "react"
import "./App.css"
import Home from "./Components/Home"
import About from "./Components/About"
function App() {
  return (
    <div className="main h-screen w-screen relative">
        <Navbar />
        <About />
    </div>
  )
}

export default App