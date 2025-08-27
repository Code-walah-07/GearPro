import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import banner1 from "/banner/banner1.jpg";
import banner2 from "/banner/banner2.jpg";
import banner3 from "/banner/banner3.jpg";

function Banner() {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-h-96 pt-3 mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Banner Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-80 object-cover transition-opacity duration-700 ease-in-out"
      />

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-indigo-800 scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Angle Brackets (Bottom Right Corner) */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Banner;
