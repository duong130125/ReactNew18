import { NavLink, Outlet } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <nav>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
    </nav>
    <Outlet></Outlet>
    </>
  )
}
