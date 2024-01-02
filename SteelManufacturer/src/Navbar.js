import { NavLink } from "react-router-dom"
import logo from '../assets/corona_steel_inc_logo.jpg'
const Navbar = () => {
  return (
    <div className="flex bg-red-500">
      <img src={logo} />
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/'>Projects</NavLink>
      <NavLink to='/'>Our Services</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </div>
  )
}

export default Navbar
