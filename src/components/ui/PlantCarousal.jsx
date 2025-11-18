import React, { useState } from "react";
import Button from "../ui/Button.jsx";

const PlantCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plants = [
    {
      id: 1,
      image: "/images/Aglaonema plant.svg",
      type: "Indoor Plant",
      name: "Aglaonema plant",
    },
    {
      id: 2,
      image: "/images/Cactus.svg",
      type: "Outdoor Plant",
      name: "Cactus",
    },
    {
      id: 3,
      image: "/images/Swiss cheese Plant.svg",
      type: "Flowering Plant",
      name: "Swiss Cheese Plant",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plants.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentPlant = plants[currentSlide];

  return (
    <div className="relative w-full max-w-lg mx-auto h-[644px] overflow-visible mt-[100px] mr-[52px]">
      {/* Background Card */}
      <img
        src="/images/Rectangle 6.svg"
        alt="Decorative card background shape"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* Plant Image */}
      <img
        src={currentPlant.image}
        alt={currentPlant.name}
        className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain z-10 transition-opacity duration-500 ease-in-out"
      />

      {/* Content */}
      <div
        className="relative z-1 h-full flex flex-col justify-end pt-[200px] pb-10 px-[66px] mr-6"
        style={{ marginTop: "-170px" }}
      >
        <p className="text-gray-300 text-[23px] opacity-75">
          {currentPlant.type}
        </p>

        <h2 className="text-white font-normal text-[38px] opacity-75 leading-[100%] tracking-[0%] w-[312px]">
          {currentPlant.name}
        </h2>

        <div className="flex justify-between items-center mt-[15px] gap-[75px]">
          <Button
            content="Buy Now"
            className="leading-[100%] tracking-[0%] opacity-75"
          />

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 hover:scale-110 transition-transform duration-200 group"
          >
            <img
              src="/images/right-arrow 2.svg"
              alt="next slide"
              className="cursor-pointer group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center mt-9 space-x-3">
        {plants.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ease-out ${
              index === currentSlide
                ? "w-[21px] h-1.5 bg-white rounded-full transform scale-105" // Slightly scaled line
                : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/70 transform hover:scale-110" // Dots with hover
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantCarousal;
