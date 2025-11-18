import React, { useState } from "react";
import Button from "./Button";

const CarousalCard = () => {
  const TOTAL_SLIDES = 5;

  const SLIDE = {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    text1:
      "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
    text2:
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    image: "images/o2SectionPic.svg",
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const prev = () =>
    setCurrentSlideIndex((i) => (i === 1 ? TOTAL_SLIDES : i - 1));

  const next = () =>
    setCurrentSlideIndex((i) => (i === TOTAL_SLIDES ? 1 : i + 1));

  return (
    <div className="w-full px-4 sm:px-6 lg:pl-[78px] lg:pr-10">
      {/* 🌿 Gradient Outer Border */}
      <div className="relative p-[2px] sm:p-[3px] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[linear-gradient(90deg,#ffffff44,#00000000,#ffffff33)] ">
        {/* 🌿 Card */}
        <div className="w-full bg-[#272e22] flex flex-col lg:flex-row items-center rounded-[18px] sm:rounded-[28px] lg:rounded-[36px] ">
          {/* 🌿 Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center relative">
            <img
              key={`img-${currentSlideIndex}`}
              src={SLIDE.image}
              alt="plant"
              className="
               transition-all duration-700 ease-out
                w-full max-w-[300px] h-[300px] mx-auto
                sm:max-w-[400px] sm:h-[400px]
                md:max-w-[500px] md:h-[500px]
                lg:max-w-[877px] lg:h-[877px]
                object-contain
                lg:absolute lg:top-1/2 lg:-translate-y-1/2
                lg:scale-110 -mt-[110px] sm:-mt-[195px] -ml-[50px] 
              "
            />
          </div>

          {/* 🌿 Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center transition-all duration-700 ease-out px-6 sm:px-8 lg:pr-14 py-8 sm:py-12 lg:py-[135px]">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] mb-6 sm:mb-8 lg:mb-[42px] font-semibold text-white leading-tight text-center lg:text-left opacity-75">
              {SLIDE.title}
            </h2>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] mb-6 sm:mb-8 lg:mb-[42px] text-white font-medium leading-[150%] text-center lg:text-left opacity-75">
              {SLIDE.text1}
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] mb-[8px] text-white font-medium leading-[150%] text-center lg:text-left opacity-75">
              {SLIDE.text2}
            </p>

            {/* 🌿 Controls */}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full">
              <Button
                content="Explore"
                className="opacity-75 w-full sm:w-auto"
              />

              <div className="flex items-center gap-4 sm:gap-[43px]">
                <button
                  onClick={prev}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <img
                    src="/images/right-arrow 2.svg"
                    alt="Previous"
                    className="w-5 h-5 sm:w-6 sm:h-6 rotate-180 opacity-75"
                  />
                </button>

                <h3 className="text-white whitespace-nowrap opacity-75">
                  <span className="text-[18px] sm:text-[20px]">0{currentSlideIndex}/</span>
                  <span className="text-[14px] sm:text-[15px]">0{TOTAL_SLIDES}</span>
                </h3>

                <button
                  onClick={next}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <img
                    src="/images/right-arrow 2.svg"
                    alt="Next"
                    className="w-5 h-5 sm:w-6 sm:h-6 opacity-75"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌿 Bottom Decoration */}
      <div className="flex justify-center items-center mt-8 sm:mt-10 lg:mt-[133px]">
        <img 
          src="/images/Group 31.svg" 
          alt="Dot" 
          className="w-24 sm:w-32 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default CarousalCard;