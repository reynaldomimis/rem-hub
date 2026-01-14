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

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-4">
          <div className="bg-[#1b263b] text-black w-full max-w-3xl rounded-lg overflow-hidden relative p-2 sm:p-4">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-3 right-4 text-xl text-gray-300 hover:text-red-500"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row">
              {/* Left Side: Logo + Download Button */}
              <div className="flex flex-col items-center px-4">

                <img
                  src={selectedApp.image}
                  alt={selectedApp.title}
                  className="w-32 h-32 rounded-full object-cover mt-6"
                />

                <div className="flex flex-col xs:flex-row gap-2 mt-4">
                  <a
                    href={selectedApp.app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="run-border-btn">
                      <span className="text-sm">Download Now!</span>
                    </button>
                  </a>

                  <a
                    href={selectedApp.app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm px-4 py-2 hover:border-blue-300 hover:text-blue-300 transition-all text-center"
                  >
                    🔗 SHARE
                  </a>
                </div>
              </div>

              <div className="md:w-2/3 p-4 space-y-4">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedApp.title}
                  </h2>
                  <p className="text-sm text-gray-300 font-normal">
                    {selectedApp.version}
                  </p>
                  <p className="text-sm text-gray-300">
                    Offered by: <strong>{selectedApp.developer}</strong>



                  </p>
                </div>

                <div className="flex flex-wrap gap-8 text-sm font-semibold">
                  <div className="text-center">
                    <p className="text-white">⭐ {selectedApp.rating} star</p>
                    <p className="text-gray-400">
                      {selectedApp.reviews} reviews
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-white">📥 {selectedApp.downloads}</p>
                    <p className="text-gray-400">Downloads</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white">🗂️ File size</p>
                    <p className="text-gray-300">{selectedApp.size}</p>
                  </div>
                </div>

                <p className="text-sm text-white mt-8">
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
