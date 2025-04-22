import React from "react";

export default function DiscoverSection() {
  return (
    <>
      <div className="bg-[#121A29] text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left lg:text-left">
            🚀 Discover Our Latest Apps!
          </h2>
          <p className="text-sm text-gray-300">
            Explore our collection of innovative and easy-to-use apps. Whether
            you're looking for productivity tools, entertainment, or utilities —
            we've got something for you! Stay updated with our newest releases,
            app updates, and exclusive features by subscribing to our
            newsletter. ✨ Be the first to know — Download now!
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/uc?export=download&id=1eoYAfWxzD5s-GtDnwBwahknYyqzPHNL8"
            download
            className="run-border-btn inline-block text-center"
          >
            <span>Download Now!</span>
          </a>
        </div>
      </div>
    </>
  );
}
