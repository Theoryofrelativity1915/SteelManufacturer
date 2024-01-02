import { NavLink } from "react-router-dom"
import logo from '../assets/corona_steel_inc_logo.jpg'
const Navbar = () => {
  return (
    <div className="flex mx-auto space-x-4 items-center sticky shadow-black">
      <img src={logo} className="w-32 mr-9 ml-9 mt-3 mb-3" />
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/'>Projects</NavLink>
      <NavLink to='/'>Our Services</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </div >
  )
}

export default Navbar
