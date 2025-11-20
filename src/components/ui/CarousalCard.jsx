import React, { useState } from "react";
import Button from "./Button";

const CarousalCard = () => {
  const SLIDES_DATA = [
    {
      id: 1,
      title: "We Have Small And Best O2 Plants Collection's",
      text1:
        "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
      text2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: "images/o2SectionPic.svg",
    },
    {
      id: 2,
      title: "Purify Your Indoor Air Naturally",
      text1:
        "Indoor air quality can be significantly improved by introducing specific plant species that act as natural air filters.",
      text2:
        "Plants like the Snake Plant and Peace Lily are champions at removing toxins, ensuring your home environment is fresh and revitalizing.",
      image: "images/o2SectionPic.svg",
    },
    {
      id: 3,
      title: "Low Maintenance, High Impact",
      text1:
        "You don't need a green thumb to enjoy the benefits of nature. Many O2 plants are incredibly resilient and require very little water.",
      text2:
        "Perfect for busy lifestyles, these plants thrive in various lighting conditions and forgive occasional forgetfulness.",
      image: "images/o2SectionPic.svg",
    },
  ];

  const TOTAL_SLIDES = SLIDES_DATA.length;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const currentSlide = SLIDES_DATA[currentSlideIndex - 1];

  const prev = () =>
    setCurrentSlideIndex((i) => (i === 1 ? TOTAL_SLIDES : i - 1));

  const next = () =>
    setCurrentSlideIndex((i) => (i === TOTAL_SLIDES ? 1 : i + 1));

  return (
    <div className="w-full px-4 sm:px-6 xl:pl-[78px] xl:pr-10">
      <div className="relative p-0.5 sm:p-[3px] rounded-[20px] sm:rounded-[30px] xl:rounded-[40px] bg-[linear-gradient(90deg,#ffffff44,#00000000,#ffffff33)] ">
        <div className="w-full bg-[#272e22] flex flex-col xl:flex-row items-center rounded-[18px] sm:rounded-[28px] xl:rounded-[36px] ">
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-center relative">
            <img
              key={`img-${currentSlide.id}`}
              src={currentSlide.image}
              alt="plant"
              className="
                transition-all duration-700 ease-out w-full max-w-[300px] h-[300px] mx-auto 
                sm:max-w-[400px] sm:h-[400px] md:max-w-[500px] md:h-[500px] xl:max-w-[877px] xl:h-[877px] object-contain xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:scale-110 -mt-[110px] sm:-mt-[195px] ml-0 -mr-5 md:mr-0 md:-ml-[50px] 
              "
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center transition-all duration-700 ease-out px-6 sm:px-8 xl:pr-14 py-8 sm:py-12 xl:py-[135px]">
            <h2
              key={`title-${currentSlide.id}`}
              className="text-[20px] sm:text-[24px] md:text-[28px] xl:text-[36px] mb-6 sm:mb-8 xl:mb-[42px] font-semibold text-white leading-tight text-center xl:text-left opacity-75"
            >
              {currentSlide.title}
            </h2>

            <p
              key={`text1-${currentSlide.id}`}
              className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] mb-6 sm:mb-8 xl:mb-[42px] text-white font-medium leading-[150%] text-center xl:text-left opacity-75"
            >
              {currentSlide.text1}
            </p>

            <p
              key={`text2-${currentSlide.id}`}
              className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] mb-2 text-white font-medium leading-[150%] text-center xl:text-left opacity-75"
            >
              {currentSlide.text2}
            </p>

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
                  <span className="text-[18px] sm:text-[20px]">
                    0{currentSlideIndex}/
                  </span>
                  <span className="text-[14px] sm:text-[15px]">05</span>
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

      <div className="flex justify-center items-center mt-8 sm:mt-10 xl:mt-[133px] space-x-3">
        {SLIDES_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index + 1)}
            className={`transition-all duration-500 ease-out ${
              index + 1 === currentSlideIndex
                ? "w-[21px] h-1.5 bg-white rounded-full transform scale-105"
                : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/70 transform hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarousalCard;
