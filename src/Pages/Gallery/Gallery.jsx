import React from "react";
import Navbar from "../../Navbar/Navbar";
import Dashboard from "../Dashboard";
import Footer from "../Footer";

const Gallery = () => {
  const cards = [
    { image: "Frame 1401.png" },
    { image: "photo2.png" },
    { image: "photo3.png" },
    { image: "photo4.png" },
    { image: "photo5.png" },
    { image: "photo6.png" },
    { image: "photo7.png" },
    { image: "photo8.png" },
    { image: "photo9.png" },
  ];

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        className="w-full min-h-[50vh] md:min-h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white text-center">
          <p className="text-sm md:text-base">Home / Gallery</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Photo Gallery</h1>
        </div>
      </div>

      <div className="w-full px-4 md:px-12">
        <div className="py-4 md:py-6 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li className="text-black font-normal">Photo Gallery</li>
            <li className="text-black font-normal">Video Gallery</li>
            <li className="text-black font-normal">Media</li>
            <li className="text-black font-normal">Success Stories</li>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="w-full">
                <img
                  src={card.image}
                  alt={`Card image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 rounded-md text-[#6c62ee] shadow-lg">
              Load more
            </button>
          </div>
        </div>
      </div>

      <Dashboard />
      <Footer />
    </div>
  );
};

export default Gallery;
