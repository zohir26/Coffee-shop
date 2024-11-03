import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (           
        <div className="navbar bg-white/30 fixed top-0  z-50 backdrop-blur-xl w-[1180px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink 
        className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./'>Home</NavLink>
        <NavLink
         className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./Coffee'>Coffee</NavLink>
        <NavLink
          className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./Dashboard'>Dashboard</NavLink>
        
      </ul>
    </div>
    <Link to ='/' className="btn btn-ghost text-xl">Coffee-Shop</Link>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5">
    <NavLink 
        className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./'>Home</NavLink>
        <NavLink
         className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./Coffee'>Coffee</NavLink>
        <NavLink
          className={({isActive})=>`tab ${isActive?'text-warning':'hover:text-warning'}`}
        to='./Dashboard'>Dashboard</NavLink>
    </ul>
  </div>

</div>
    );
};
export default Navbar;