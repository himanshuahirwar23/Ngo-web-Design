import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = ["Banner.png", "Banner1.jpg", "Banner2.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      className="bg-cover h-screen flex items-center justify-between"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="w-14 h-14 ml-5 cursor-pointer" onClick={prevImage}>
        <img className="w-full h-full" src="arrow-left.png" alt="Previous" />
      </div>
      <div className="text-center">
        <h1 className="text-white text-[42px]">
          Reimagine the Future <br /> of Education
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsam vitae reiciendis, <br /> laborum recusandae aperiam .
        </p>
      </div>
      <div className="w-14 h-14 mr-5 cursor-pointer" onClick={nextImage}>
        <img className="w-full h-full" src="arrow-right.png" alt="Next" />
      </div>
    </div>
  );
};

export default Banner;
