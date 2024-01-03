import { NavLink } from "react-router-dom"
export const Navlinks = () => {
  return (
    <div className="">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/'>Projects</NavLink>
      <NavLink to='/'>Our Services</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </div>
  )
}
