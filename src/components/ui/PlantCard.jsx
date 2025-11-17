// src/components/compound/PlantCard.jsx

import React from 'react';
import CartButton from '../ui/CartButton';

const PlantCard = ({ name, description, price, image, cardBackgroundUrl = "/images/Rectangle 6.svg" }) => {

  // The total height of the card is around 644px (from your previous code)
  // We need to account for the image overlap.

  return (
    <div 
      className={`
        relative 
        w-full 
        h-[644px]
        overflow-visible
        bg-contain bg-center bg-no-repeat
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
      <div className='px-[26px] -mt-[150px] flex justify-center relative z-10' > 
        <img 
          src={image} 
          alt={name} 
          // Use specific sizes from Figma for the plant image itself
          className='w-[459px] h-[459px] object-contain'
        />
      </div>

      {/* 2. Text Content and Price */}
      {/* We use a negative margin here to pull the text content back up 
         into the visible area of the card background. You must adjust this value 
         (e.g., -mt-[100px]) to place the text just below the pot. */}
      <div className='flex flex-col relative z-10' style={{ marginTop: '-100px', paddingBottom: '20px' }}> 
        <div className="pl-[66px] pr-[74px]">
          <h2 className='text-white font-semibold text-[34px]'>{name}</h2>
        </div>
        <div className='pl-[66px] pr-[74px]'>
            <p className='text-gray-300 text-[24px] mt-2'>{description}</p>
        </div>
        <div className='flex justify-between items-center pl-[66px] pr-[74px] mt-1  '>
          <span className='text-white font-normal text-[38px] '>
            Rs. {price}
          </span>
          <CartButton />
        </div>
      </div>
      
    </div>
  );
};

export default PlantCard;