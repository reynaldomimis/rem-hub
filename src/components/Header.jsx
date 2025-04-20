import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "relative px-4 py-2 rounded-full font-medium transition-all duration-300 text-white hover:text-cyan-400 overflow-hidden group";

  const borderEffect =
    "absolute inset-0 rounded-full border border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_2px_rgba(0,255,255,0.6)] transition-all duration-300";

  return (
    <>
      <div className="flex justify-between items-center mb-10 mt-6 flex-wrap gap-4">
        {/* Logo */}
        <Link to="/" className={navLinkClass}>
          <h1 className="text-3xl font-bold">REM.Hub</h1>
        </Link>

        {/* Hamburger Button - visible on small screens */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:space-x-2 text-lg w-full md:w-auto ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link to="/injector" className={navLinkClass}>
            <span className={borderEffect}></span>
            <span className="relative z-10">Injector</span>
          </Link>
          <Link to="/books" className={navLinkClass}>
            <span className={borderEffect}></span>
            <span className="relative z-10">eBooks</span>
          </Link>
          <Link to="/movies" className={navLinkClass}>
            <span className={borderEffect}></span>
            <span className="relative z-10">Movies</span>
          </Link>
          <Link to="/software" className={navLinkClass}>
            <span className={borderEffect}></span>
            <span className="relative z-10">Software</span>
          </Link>
        </div>

        {/* Search Input */}
        <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-auto mx-8 md:mx-6 mt-4 md:mt-6">
          <input
            className="px-4 py-2 text-black outline-none w-full md:w-auto"
            type="text"
            placeholder="Search app..."
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-full">
            🔍
          </button>
        </div>
      </div>
      <h1 className="text-6xl text-center font-bold mt-8 md:mt-14 mb-8 md:mb-12">
        App That Suits You Better
      </h1>
    </>
  );
}
