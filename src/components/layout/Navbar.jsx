import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", hasSpan: false },
    { name: "Plants Type", hasSpan: true },
    { name: "More", hasSpan: false },
    { name: "Contact", hasSpan: false },
  ];

  return (
    <div className="w-full relative z-50">
      <div className="max-w-[1728px] w-full mx-auto flex justify-between pt-8 md:pt-[57px] px-6 md:pl-[39px] md:px-10 items-center">
        
        {/* --- LOGO --- */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logoPlant.png"
            alt="logo"
            className="h-[30px] md:h-12 w-[30px] md:w-12"
          />
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#FFFFFF]">
            FloraVision.
          </h2>
        </div>

        {/* --- DESKTOP MENU LINKS --- */}
        <div className="hidden md:block">
          <ul className="flex gap-10 lg:gap-[71px] text-[#FFFFFF]">
            {navLinks.map((link, index) => (
              <li key={index} className="text-xl lg:text-2xl font-normal font-['Indie_Flower'] cursor-pointer hover:text-green-300 transition">
                {link.name} {link.hasSpan && <span> </span>}
              </li>
            ))}
          </ul>
        </div>

        {/* --- ICONS & HAMBURGER --- */}
        <div className="flex gap-4 md:gap-[59px] items-center">
          <img
            src="/images/searchicon.svg"
            alt="search icon"
            className="w-6 h-6 md:w-[26px] md:h-[26px]"
          />
          <img
            src="/images/bagicon.svg"
            alt="bag icon"
            className="w-6 h-6 md:w-[26px] md:h-[26px]"
          />

          {/* --- HAMBURGER BUTTON --- */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              text-white focus:outline-none md:pointer-events-none md:opacity-30         opacity-100 cursor-pointer
            `}
          >
            {isMenuOpen ? (
               // Close Icon (X)
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               // Hamburger Icon (Lines)
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm shadow-xl py-10 z-40 animate-fadeIn">
          <ul className="flex flex-col items-center gap-8 text-[#FFFFFF]">
            {navLinks.map((link, index) => (
              <li 
                key={index} 
                className="text-2xl font-normal font-['Indie_Flower'] cursor-pointer hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;