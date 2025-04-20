import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperCard({ data }) {
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <>
      {data && data.length > 0 ? (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="m-16 swiper-pagination-bullets"
        >
          {data.map((app, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#1b263b] text-white rounded-lg overflow-hidden p-4 cursor-pointer"
                onClick={() => setSelectedApp(app)}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-64 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2">{app.title}</h2>
                <p className="text-gray-400 text-sm">{app.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="m-16 text-center text-gray-400 text-xl font-semibold border border-dashed border-gray-600 p-10 rounded-lg">
          🚫 No apps available at the moment.
        </div>
      )}

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 sm:px-6">
          <div className="bg-[#1b263b] text-black w-full max-w-3xl rounded-lg overflow-hidden relative p-4 sm:p-6">
            <button
              className="absolute top-2 right-3 text-2xl text-white font-medium hover:text-red-500 transition-colors duration-200"
              onClick={() => setSelectedApp(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <img
                src={selectedApp.image}
                alt={selectedApp.title}
                className="w-32 h-32 rounded-full object-cover mt-6 mx-4"
              />

              <div className="md:w-2/3 p-4 space-y-4">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedApp.title}
                  </h2>
                  <p className="text-sm text-gray-300 font-normal">
                    {selectedApp.version}
                  </p>
                  <p className="text-sm text-gray-300">
                    Developed by: <strong>{selectedApp.developer}</strong>
                  </p>
                </div>

                <div className="flex flex-wrap gap-12 text-sm font-semibold">
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

            <div className="flex justify-between items-center px-4 sm:px-6 py-4 bg-[#121A29] border-t mt-2">
              <a
                href={selectedApp.app_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-transparent hover:border-blue-300 hover:text-blue-300 transition-all duration-300"
              >
                SHARE APP
              </a>
              <a
                href={selectedApp.app_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
              >
                DOWNLOAD NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
