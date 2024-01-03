import { NavLink } from "react-router-dom"
import logo from '../assets/corona_steel_inc_logo.jpg'
import { useState } from "react"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    console.log(open)
    setOpen(!open)
  }
  return (
    <div>
      <div className="flex justify-between">
        <img src={logo} className="w-32 mr-9 ml-9 mt-3 mb-3" />
        <div className="hidden sm:flex mx-auto space-x-4 items-center sticky shadow-black">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Projects</NavLink>
          <NavLink to='/'>Our Services</NavLink>
          <NavLink to='/'>Contact</NavLink>
        </div >
        <div className="flex sm:hidden cursor-pointer focus:cursor-none" onClick={handleClick}>
          {open ? <></> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-12 h-11 m-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>}
          {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-12 h-11 m-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg> : <></>}
        </div>
      </div>
      <div className={open ? "absolute flex flex-col z-10 bg-violet-100 w-screen transition-all" : "transition-all -translate-x-full absolute flex flex-col z-10 bg-violet-100 w-screen"}>
        <NavLink to='/' className='m-4 text-2xl text-center'>Home</NavLink>
        <NavLink to='/' className='m-4 text-2xl text-center'>About</NavLink>
        <NavLink to='/projects' className='m-4 text-2xl text-center'>Projects</NavLink>
        <NavLink to='/services' className='m-4 text-2xl text-center'>Our Services</NavLink>
        <NavLink to='/' className='m-4 text-2xl text-center'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
