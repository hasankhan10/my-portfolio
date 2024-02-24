import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div className="navbar w-full h-[4rem] flex justify-center place-items-center absolute z-50">
        <div className=" w-[98%] h-[3rem] bg-slate-300 mt-6 sm:rounded-full rounded-xl fixed flex place-items-center justify-center space-x-5 font-mono text-slate-900 font-bold sm:space-x-20 sm:w-[42%]">
            <NavLink to={"/"}>Home</NavLink >
            <NavLink to={"about"}>About</NavLink >
            <NavLink to={"skill"}>Skill</NavLink >
            <NavLink to={"projects"}>Projects</NavLink >
            <NavLink to={"contact"}>Contact</NavLink >
        </div>
    </div>
  )
}

export default Navbar