import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";
import { socialLinks } from "../data/socialLink";
import { footerLinks } from "../helper/routerHelper";

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleClickScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinkClass =
    "text-black hover:text-[#00344C] hover:underline transition-colors duration-300 font-normal";

  return (
    <>
      <footer className="bg-[#eeeef3] text-black py-6 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="hidden lg:block flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#00344C]">MK.HUB</h1>
          </div>

          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">Explore</p>
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  onClick={handleClickScroll}
                >
                  {link.label}
                </Link>
              ))}
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
                className={`${navLinkClass} text-left`}
                onClick={() => setIsTermsModalOpen(true)}
              >
                Terms & Privacy Policy
              </button>
            </div>
          </div>
          <p className="mb-4 text-center">
            © 2025 REM.Hub. All rights reserved.
          </p>
        </div>

        {/* Terms Modal */}
        <TermsModal
          type="terms"
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
        />
      </footer>
    </>
  );
}
