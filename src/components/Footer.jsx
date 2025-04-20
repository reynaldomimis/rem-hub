import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";
import { socialLinks } from "../data/socialLink";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinkClass =
    "text-black hover:text-[#00344C] hover:underline transition-colors duration-300 font-normal";
  return (
    <>
      <footer className="bg-[#eeeef3] text-black py-10 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#00344C]">REM.Hub</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">Explore</p>
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <Link to="/injector" className={navLinkClass}>
                Injector
              </Link>
              <Link to="/books" className={navLinkClass}>
                eBooks
              </Link>
              <Link to="/movies" className={navLinkClass}>
                Movies
              </Link>
              <Link to="/software" className={navLinkClass}>
                Software
              </Link>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Contact</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={navLinkClass}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Policy</p>
              <button
                className={navLinkClass}
                onClick={() => setIsModalOpen(true)}
              >
                Terms & Privacy Policy
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between text-sm">
            <p className="mb-4">© 2025 REM.Hub. All rights reserved.</p>
            <div className="flex gap-3 text-xl">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <TermsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </footer>
    </>
  );
}
