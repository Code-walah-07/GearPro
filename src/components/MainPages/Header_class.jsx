import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightToBracket,
  faMoon,
  faSun,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header_class() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="h-20 flex items-center px-4 md:px-6 justify-between">
        {/* Logo */}
        <div className="w-auto">
          <Link to="/" className="h-16">
            <img
              className="h-12 mt-2 rounded-lg hover:scale-105 transition-transform duration-300"
              src="/new_logo_2.svg"
              alt="GearPro_Logo"
            />
          </Link>
        </div>

        {/* Search Bar (Always visible) */}
        <div className="flex w-1/2 max-w-md mx-2">
          <div className="flex items-center px-3 bg-gray-200 rounded-l-lg">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            className="flex-1 px-3 py-2 rounded-r-lg text-sm bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
            type="text"
            placeholder="Search for products..."
          />
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-300 shadow-md"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden px-3 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 font-semibold">
          <Link to="/" className="hover:text-indigo-800 transition-colors duration-300">
            Home
          </Link>
          <Link to="/shop" className="hover:text-indigo-800 transition-colors duration-300">
            Shop
          </Link>
          <Link to="/categories" className="hover:text-indigo-800 transition-colors duration-300">
            Categories
          </Link>
          <Link to="/about" className="hover:text-indigo-800 transition-colors duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-800 transition-colors duration-300">
            Contact
          </Link>
        </nav>

        {/* Desktop Right Side (Login/Profile/Cart) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/Sign_up"
            className="px-3 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-300 flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
            <span className="text-sm font-bold">Login</span>
          </Link>

          <Link
            to="/Profilepage"
            className="px-3 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-300 flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="text-sm font-bold">Profile</span>
          </Link>

          <Link
            to="/CartPage"
            className="relative px-3 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-300 flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="text-sm font-bold">Cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-4 px-6 py-4 font-semibold transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <Link to="/" className="hover:text-indigo-800 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop" className="hover:text-indigo-800 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/categories" className="hover:text-indigo-800 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
            Categories
          </Link>
          <Link to="/about" className="hover:text-indigo-800 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-800 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            to="/Sign_up"
            className="hover:text-indigo-800 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/Profilepage"
            className="hover:text-indigo-800 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/CartPage"
            className="hover:text-indigo-800 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header_class;
