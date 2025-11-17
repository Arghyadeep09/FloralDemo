import React from 'react';

const ReviewCard = ({ name, rating, image, review }) => {
  
  // Standardized dimensions
  const CARD_HEIGHT = 'h-[280px]'; 
  
  // Padding values measured from Figma for the Review Card's content area
  // We'll use these in Tailwind syntax below.
  const PADDING_TOP = 'pt-[35px]';
  const PADDING_RIGHT_LEFT = 'px-[30px]';
  const PADDING_BOTTOM = 'pb-[30px]';

  return (
    <div 
      // 1. Main Card Container: Position relative for stacking context
      className={`relative w-full ${CARD_HEIGHT} overflow-hidden`}
    >
      
      {/* Background Layer (z-0) - Identical Structure */}
      <img
        src="/images/Rectangle 7.svg" 
        alt="Review Card Background" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />
      
      {/* 2. Content Layer (z-10): Absolute overlay covering the card area */}
      {/* 💡 APPLY vertical padding (top/bottom) to this container. 
           We will apply horizontal padding to the inner divs. */}
      <div 
        className={`absolute inset-0 z-10 flex flex-col ${PADDING_TOP} ${PADDING_BOTTOM}`}
      >
        
        {/* Top Section: Avatar, Name, and Rating (Horizontal Flex) */}
        {/* Apply horizontal padding here */}
        <div className={`flex items-center space-x-4 mb-4 ${PADDING_RIGHT_LEFT}`}>
          
          {/* Avatar Image (Rounded) */}
          <img 
            src={image} 
            alt={`Avatar of ${name}`} 
            className='w-[50px] h-[50px] rounded-full object-cover'
          />
          
          {/* Name and Rating */}
          <div className='flex flex-col'>
            <h2 className='text-white font-semibold text-[20px]'>{name}</h2>
            <p className='text-brand-accent text-sm mt-1'>{rating}</p>
          </div>
        </div>
        
        {/* Bottom Section: Review Text */}
        {/* Apply horizontal padding here */}
        <div className={`mt-4 ${PADDING_RIGHT_LEFT}`}>
          <p className='text-gray-300 text-[16px] leading-relaxed line-clamp-4'>{review}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;