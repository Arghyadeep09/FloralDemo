import React, { useState } from 'react';
import Button from './Button';

const CarousalCard = () => {
  const STATIC_SLIDE_CONTENT = {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection’s",
    text1: "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
    text2: "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    image: "/images/o2SectionPic.svg",
  };

  const TOTAL_SLIDES = 5;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const currentSlide = STATIC_SLIDE_CONTENT;

  const minus = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 1 ? TOTAL_SLIDES : prevIndex - 1
    );
  };

  const plus = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === TOTAL_SLIDES ? 1 : prevIndex + 1
    );
  };

  return (
    <div className="w-full px-4 md:px-8">
      
      {/* IMPORTANT: Added large top margin (mt-[160px] -> lg:mt-[200px]) 
         to the wrapper to create space for the image popping out. 
      */}
      <div className="
        mt-40 md:mt-60 lg:mt-[200px]
        mb-20
        mx-auto
        max-w-[1400px]
        lg:ml-[88px] lg:mr-10
      ">
        
        {/* Gradient Border Wrapper */}
        <div className="
          relative
          p-[3px] 
          rounded-[40px] 
          bg-[linear-gradient(90deg,#ffffff44,#00000000,#ffffff33)]
        ">
          
          {/* Inner Card Container */}
          <div className="
            w-full bg-[#272e22] 
            flex flex-col lg:flex-row 
            items-center 
            lg:h-[755px] 
            rounded-[36px] 
            px-6 pb-10 pt-0 
            md:px-12 md:pb-12 md:pt-0
            lg:px-12 lg:pt-0 lg:gap-10
            relative
          ">
            
            {/* Image Section */}
            <div className="
              w-full lg:w-1/2 
              flex justify-center lg:block 
              relative z-10
            ">
              <img
                key={`img-${currentSlideIndex}`}
                src={currentSlide.image}
                alt="plant"
                className="
                  transition-all duration-700 ease-out transform translate-x-0 opacity-100
                  
                  /* --- MOBILE (Small) --- */
                  w-[280px] h-auto
                  -mt-[140px]   /* Pull image up */
                  mb-6
                  
                  /* --- TABLET (Medium) --- */
                  md:w-[450px]
                  md:-mt-[220px] /* Pull image up more */
                  md:mb-10

                  /* --- DESKTOP (Large) --- */
                  lg:w-[877px] lg:max-w-none lg:h-auto
                  lg:absolute lg:top-1/2 lg:-translate-y-1/2
                  lg:-left-[125px] lg:-mt-[200px] lg:mb-0
                "
              />
            </div>

            {/* Text Content Section */}
            <div
              key={`text-${currentSlideIndex}`}
              className="
                w-full lg:w-1/2 lg:ml-auto
                flex flex-col justify-center
                transition-all duration-700 ease-out transform translate-x-0 
                relative z-20
              "
            >
              <h2 className="
                text-[28px] md:text-[38px] 
                mb-6 md:mb-[42px] 
                font-semibold text-white leading-[110%] font-['Inter'] opacity-75 tracking-[0%]
                text-center lg:text-left
              ">
                {currentSlide.title}
              </h2>

              <p className="
                text-[16px] md:text-[24px] lg:text-[28px] 
                mb-6 md:mb-[42px] 
                text-white font-medium leading-[140%] lg:leading-[100%] font-['Inter'] tracking-[0%] opacity-75
                text-center lg:text-left
              ">
                {currentSlide.text1}
              </p>

              <p className="
                text-[16px] md:text-[24px] lg:text-[28px] 
                mb-8 md:mb-12 
                text-white font-medium leading-[140%] lg:leading-[100%] font-['Inter'] tracking-[0%] opacity-75
                text-center lg:text-left
              ">
                {currentSlide.text2}
              </p>

              {/* Controls */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 w-full">
                <Button content="Explore" className="opacity-75 w-full md:w-auto" />

                <div className="flex items-center space-x-4">
                  <button onClick={minus} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <img
                      src="/images/right-arrow 2.svg"
                      alt="Previous"
                      className="w-6 h-6 rotate-180 transition-opacity hover:opacity-75 cursor-pointer"
                    />
                  </button>
                  
                  <h3 className="text-white whitespace-nowrap">
                    <span className="text-[20px] opacity-75">0{currentSlideIndex}/</span>
                    <span className="text-[15px] opacity-75">0{TOTAL_SLIDES}</span>
                  </h3>
                  
                  <button onClick={plus} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <img
                      src="/images/right-arrow 2.svg"
                      alt="Next"
                      className="h-6 w-6 transition-opacity hover:opacity-75 cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="flex justify-center items-center mt-10 lg:mt-[133px]">
        <img src="/images/Group 31.svg " alt="Dot" />
      </div>
      
    </div>
  );
};

export default CarousalCard;