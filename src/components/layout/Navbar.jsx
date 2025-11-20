import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", hasSpan: false },
    { name: "Plants Type", hasSpan: true },
    { name: "More", hasSpan: false },
    { name: "Contact", hasSpan: false },
  ];

  return (
    <div className="w-full relative z-50">
      <div className="max-w-[1728px] w-full mx-auto flex justify-between pt-8 md:pt-[57px] px-6 md:pl-[39px] md:px-10 items-center">
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

        <div className="hidden md:block">
          <ul className="flex gap-10 xl:gap-[71px] text-[#FFFFFF]">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center md:gap-2.5 xl:gap-5 text-xl md:text-[15px] lg:text-[18px] xl:text-2xl font-normal font-['Indie_Flower'] cursor-pointer hover:text-green-300 transition"
              >
                {link.name}
                {link.hasSpan && (
                  <span>
                    <img
                      src="/images/Polygon 1.svg"
                      alt="dropdown"
                      className="xl:h-[7px] xl:w-3 md:h-[5px] md:w-2.5"
                    />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 lg:gap-[30px] xl:gap-[59px] items-center">
          <img
            src="/images/searchicon.svg"
            alt="search icon"
            className="w-3 h-3 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] xl:w-[26px] xl:h-[26px] cursor-pointer"
          />
          <img
            src="/images/bagicon.svg"
            alt="bag icon"
            className="w-3 h-3 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] xl:w-[26px] xl:h-[26px] cursor-pointer"
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-white focus:outline-none md:pointer-events-none md:opacity-30 opacity-100 cursor-pointer`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                className="md:w-[15px] md:h-[15px] w-3 h-3 lg:w-[18px] lg:h-[18px] xl:w-[26px] xl:h-[26px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="md:w-[15px] md:h-[15px] w-3 h-3 lg:w-8 lg:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full  backdrop-blur-[30px] shadow-xl py-10 z-40 animate-fadeIn">
          <ul className="flex flex-col items-center gap-8 text-[#FFFFFF]">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-[15px] font-normal font-['Indie_Flower'] cursor-pointer hover:text-green-400"
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
