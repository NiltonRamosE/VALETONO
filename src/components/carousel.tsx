"use client";

import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselItem {
  image: string;
  title: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl bg-gray-50 dark:bg-gray-900">
      {/* Carrusel Principal */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-95"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}

        {/* Superposición de Texto */}
        <div className="absolute inset-0 flex flex-col justify-center sm:justify-center items-center sm:items-center px-6 text-center z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="bg-black/50 p-4 rounded-lg shadow-md backdrop-blur-md w-full sm:w-auto sm:bottom-auto sm:translate-y-0 absolute sm:relative bottom-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {items[currentIndex].title}
            </h3>
            {items[currentIndex].description && (
              <p className="text-sm sm:text-lg md:text-xl text-gray-200">
                {items[currentIndex].description}
              </p>
            )}
          </div>
        </div>

        {/* Flecha Izquierda */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 shadow-lg z-30 transition-transform hover:scale-110"
        >
          <FaArrowLeft size={28} />
        </button>

        {/* Flecha Derecha */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 shadow-lg z-30 transition-transform hover:scale-110"
        >
          <FaArrowRight size={28} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-nilton-green shadow-md scale-110"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
