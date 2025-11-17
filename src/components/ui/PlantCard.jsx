// src/components/compound/PlantCard.jsx

import React from "react";
import CartButton from "../ui/CartButton";

const PlantCard = ({
  name,
  description,
  price,
  image,
  cardBackgroundUrl = "/images/Rectangle 6.svg",
}) => {
  // The total height of the card is around 644px (from your previous code)
  // We need to account for the image overlap.

  return (
    <div
      className={`
        relative 
        w-full  max-w-lg mx-auto
        h-[644px]
        overflow-visible
      `}
      // 💡 Use the card shape image as the container background
    >
      <img
        src={cardBackgroundUrl}
        alt="Decorative card background shape"
        // 💡 Make this absolute, stretch it to fill the entire container,
        // and push it to the back (z-0).
        className="absolute inset-0 w-full h-full object-fill z-0"
      />
      {/* 1. The Overlapping Plant Image */}
      {/* We use negative margin (e.g., -mt-[150px]) to pull the image up and out. */}
      {/* This element is absolutely crucial for the overlapping effect. */}

      <img
        src={image}
        alt={name}
        // Use specific sizes from Figma for the plant image itself
        className="  absolute
          -top-[140px]
          left-1/2
          -translate-x-1/2
          w-[459px]
          h-[459px]
          object-contain
          z-10"
      />

      {/* 2. Text Content and Price */}
      {/* We use a negative margin here to pull the text content back up 
         into the visible area of the card background. You must adjust this value 
         (e.g., -mt-[100px]) to place the text just below the pot. */}
      <div
        className="relative
          z-10
          h-full
          flex flex-col
          justify-end
          pt-[200px]
          pb-10
          px-[66px]"
        style={{ marginTop: "-100px", paddingBottom: "20px" }}
      >
        <h2 className="text-white font-semibold text-[22px] md:text-[28px] lg:text-[34px]">
          {name}
        </h2>

        <p className="text-gray-300 text-[14px] md:text-[18px] lg:text-[24px] mt-2 md:mt-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-3 md:mt-4">
          <span className="text-white font-normal text-[22px] md:text-[30px] lg:text-[38px]">
            Rs. {price}
          </span>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;