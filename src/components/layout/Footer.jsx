import React from "react";

const Footer = () => {
  return (
    // Container: Adjusted margin-top to be responsive (smaller on mobile)
    <div className="w-full mt-20 lg:mt-[280px] pb-10">
      
      <div
        className="max-w-[1728px] w-full mx-auto 
                   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                   gap-y-12 md:gap-y-16 lg:gap-x-[129px] lg:gap-y-20 
                   text-white px-6 md:px-12 lg:px-20"
      >

        {/* --- Column 1: Brand Info --- */}
        {/* Centered on mobile/tablet, Left-aligned on desktop */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-[43px]">
          
          {/* Logo Row */}
          <div className="flex items-center gap-[13px]">
            <img
              src="/images/logoPlant.png"
              alt="logo"
              className="h-[60px] w-[60px] lg:h-[94px] lg:w-[94px]"
            />
            <h2 className="text-3xl lg:text-[45px] font-['Inter'] opacity-75">
              FloraVision.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg lg:text-[28px] font-medium leading-snug lg:leading-[100%] tracking-wide max-w-[580px] text-center lg:text-left">
            "From lush indoor greens to vibrant outdoor blooms, our plants
            are crafted to thrive and elevate your living environment."
          </p>

          {/* Social Icons */}
          <div className="text-xl lg:text-[28px] font-extrabold flex gap-10 mb-4 lg:mb-[141px]">
            <p className="cursor-pointer hover:text-gray-300">FB</p>
            <p className="cursor-pointer hover:text-gray-300">TW</p>
            <p className="cursor-pointer hover:text-gray-300">LI</p>
          </div>
        </div>

        {/* --- Column 2: Quick Links --- */}
        {/* Centered on mobile, aligned left on large screens */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-[46px]">
          <p className="text-2xl lg:text-[28px] font-extrabold">Quick Link's</p>
          <ul className="text-lg lg:text-[24px] font-medium flex flex-col items-center lg:items-start gap-4 lg:gap-[26px] underline">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Type’s Of plant’s</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
            <li className="cursor-pointer hover:text-gray-300">Privacy</li>
          </ul>
        </div>

        {/* --- Column 3: Newsletter --- */}
        {/* Spans full width on tablet (col-span-2) to look balanced, normal on desktop */}
        <div className="flex flex-col h-full items-center lg:items-start md:col-span-2 lg:col-span-1 w-full">
          <p className="text-2xl lg:text-[28px] font-extrabold mb-6 lg:mb-[50px]">
            For Every Update.
          </p>
          
          {/* Subscription Box */}
          <div className="h-auto min-h-[60px] lg:h-[74px] w-full max-w-[562px] rounded-lg mb-12 lg:mb-[120px] flex flex-wrap md:flex-nowrap items-center justify-between border-2 border-[#ffffff] p-1">
              <span className='text-gray-400 text-lg lg:text-[24px] py-2 pl-4 md:pl-[29px] w-full md:w-auto text-center md:text-left'>
                Enter Email 
              </span>
              <button className="w-full md:w-auto mt-2 md:mt-0 mr-0 md:mr-1 h-12 md:h-16 py-2 md:py-[18px] px-5 bg-[#ffffff] text-[#000000] text-lg lg:text-[22px] font-bold leading-relaxed rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                SUBSCRIBE
              </button>
          </div>
          
          {/* Copyright */}
          <p className="text-lg lg:text-[24px] font-medium mt-auto mb-10 lg:mb-[141px] text-center lg:text-left">
            FloraVision © All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;