import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperCard({ data = [] }) {
  const [selectedApp, setSelectedApp] = useState(null);

  const canLoop = data.length >= 4;

  if (!data || data.length === 0) {
    return (
      <div className="m-16 text-center text-gray-400 text-xl font-semibold border border-dashed border-gray-600 p-10 rounded-lg">
        🚫 No apps available at the moment.
      </div>
    );
  }

  return (
    <>
      {/* ================== SWIPER ================== */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        navigation={canLoop}
        pagination={{ clickable: true }}
        autoplay={
          canLoop
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={canLoop}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="m-8"
      >
        {data.map((app) => (
          <SwiperSlide key={app.id ?? app.title}>
            <div
              className="bg-[#1b263b] text-white rounded-lg overflow-hidden p-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedApp(app)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-semibold mb-2">{app.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3">
                {app.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================== MODAL ================== */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-4">
          <div className="bg-[#1b263b] w-full max-w-3xl rounded-lg relative p-4 text-white">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-3 right-4 text-xl hover:text-red-500"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* LEFT */}
              <div className="flex flex-col items-center">
                <img
                  src={selectedApp.image}
                  alt={selectedApp.title}
                  className="w-32 h-32 rounded-full object-cover mt-4"
                />

                <div className="flex gap-3 mt-4">
                  <a
                    href={selectedApp.app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="run-border-btn px-4 py-2 text-sm">
                      Download Now
                    </button>
                  </a>

                  <a
                    href={selectedApp.app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-400 px-4 py-2 text-sm rounded hover:border-blue-400 hover:text-blue-400 transition"
                  >
                    🔗 Share
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedApp.title}</h2>
                  <p className="text-sm text-gray-300">
                    Version: {selectedApp.version}
                  </p>
                  <p className="text-sm text-gray-300">
                    Offered by{" "}
                    <span className="font-semibold">
                      {selectedApp.developer}
                    </span>
                  </p>
                </div>

                <div className="flex gap-8 text-sm font-semibold">
                  <div>
                    ⭐ {selectedApp.rating} <br />
                    <span className="text-gray-400">
                      {selectedApp.reviews} reviews
                    </span>
                  </div>
                  <div>
                    📥 {selectedApp.downloads} <br />
                    <span className="text-gray-400">Downloads</span>
                  </div>
                  <div>
                    🗂️ {selectedApp.size} <br />
                    <span className="text-gray-400">File size</span>
                  </div>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {selectedApp.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
