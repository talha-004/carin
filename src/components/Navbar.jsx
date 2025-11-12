import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = "hover:text-green-700 transition font-medium text-gray-800";
  const activeStyle = "text-green-700 font-semibold";

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 shadow-sm bg-white">
      {/* Logo */}
      <img src="/assets/Carin_logo.png" className="w-26" alt="logo" />

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vehicles"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Vehicles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/details"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Login / Register Button */}
      <button className="border border-gray-400 text-gray-800 font-semibold px-5 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
        Login / Register
      </button>
    </nav>
  );
};

export default Navbar;
