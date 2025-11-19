import React from "react";

const SectionTitle = ({ title, className }) => {

  return (
    <div
      className={`
        relative inline-flex items-center justify-center drop-shadow-lg text-white font-semibol font-['Inter'] text-[24px] md:text-[55px] h-[45px] md:h-[67px]      
        ${className || ""}
      `}
    >
      {/* LEFT BRACKET */} 
      <img 
         src="/images/Vector 5.svg" 
         alt="Bracket Left"
         className={`
           absolute w-[35px] h-9 -left-1.5 top-1.5 md:w-[61.5px] md:h-[63px] md:left-[-9px] md:top-[3px]
         `}
      />

      <span className="relative z-10  ">{title}</span>

      {/* RIGHT BRACKET */}
      <img
        src="/images/Vector 6.svg"
        alt="Bracket Right"
        className={`
           absolute w-[35px] h-9 -right-1.5 md:w-[61.5px] md:h-[63px] md:right-[-10.5px] md:top-[3px]
         `}
      />
    </div>
  );
};

export default SectionTitle;