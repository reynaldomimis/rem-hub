import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../helper/routerHelper";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside or scrolling

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass =
    "relative px-4 py-2 rounded-full font-medium transition-all duration-300 text-white hover:text-cyan-400 overflow-hidden group";

  const borderEffect =
    "absolute inset-0 rounded-full border border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_2px_rgba(0,255,255,0.6)] transition-all duration-300";

  return (
    <>
      <div className="flex justify-between items-center mb-4 flex-wrap ">
        {/* Logo */}
        <Link to="/" className={navLinkClass}>
          <h1 className="text-3xl font-bold">REM.Hub</h1>
        </Link>

        {!menuOpen && (
          <button
            className="md:hidden z-50 relative w-8 h-8"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300`}
            />
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300`}
            />
          </button>
        )}

        {/* Close Button (Only visible when menu is open) */}
        {menuOpen && (
          <button
            className="md:hidden z-50 relative w-8 h-8"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        )}

        {/* Navigation Links */}
        <div
          ref={menuRef}
          className={`flex flex-col md:flex-row pl-4 md:space-x-2 text-lg w-full md:w-auto ${
            menuOpen ? "block border-b border-gray-600" : "hidden"
          } md:flex`}
        >
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <span className={borderEffect}></span>
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </div>

        {/* Search Input
        <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-auto mx-8 md:mx-6 mt-4 md:mt-6">
          <input
            className="px-4 py-2 text-black outline-none w-full md:w-auto"
            type="text"
            placeholder="Search app..."
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-full">
            🔍
          </button>
        </div> */}
      </div>
      <h1 className="text-5xl text-center font-bold mt-4">
        App That Suits You Better
      </h1>
    </>
  );
}
