import React from 'react'
import { useState } from 'react'
import Button from './Button'

const CarousalCard = () => {


    const STATIC_SLIDE_CONTENT = {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection’s",
    text1: "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
    text2: "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    image: "/images/Aglaonema plant.svg", 
};

    const TOTAL_SLIDES = 5;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const currentSlide = STATIC_SLIDE_CONTENT;

    const minus=()=>{
        setCurrentSlideIndex(prevIndex => 
            prevIndex === 1 ? TOTAL_SLIDES : prevIndex - 1
        );
    }

    const plus=()=>{
        setCurrentSlideIndex(prevIndex => 
            prevIndex === TOTAL_SLIDES ? 1 : prevIndex + 1
        );     
    }


  return (
    <>

      <div className="
        p-[3px] 
        rounded-[40px] 
        bg-[linear-gradient(90deg,#ffffff44,#00000000,#ffffff33)]
      ">
        
        
        <div className="
          w-full bg-[#272e22] 
          flex items-center 
          h-[755px] 
          rounded-[36px] 
          px-12 gap-10
          relative 
        ">
          
          <img 
            key={`img-${currentSlideIndex}`}
            src={currentSlide.image}
            alt="plant" 
            className="w-[877px] h-[877px] -mt-[70px] -ml-[220px] transition-all duration-700 ease-out 
                            transform translate-x-0 opacity-100"
          />

          <div 
          key={`text-${currentSlideIndex}`}
          className="max-w-[700px] transition-all duration-700 ease-out 
                            transform translate-x-0 opacity-100">

            <h2 className="text-[38px] pb-[42px] font-semibold text-white leading-snug font-['Inter']">
              {currentSlide.title}
            </h2>

            <p className="text-[28px] pb-[42px] text-white font-medium leading-relaxed font-['Inter']">
              {currentSlide.text1}
            </p>

            <p className="text-[28px] pb-2 text-white font-medium leading-relaxed font-['Inter']">
              {currentSlide.text2}
            </p>

            <div className='flex justify-between items-center'>
                <Button content="Explore " />

                <div className='flex items-center space-x-4'>
                <button onClick={minus}><img src="/images/right-arrow 2.svg" alt="Previous" className='w-6 h-6 rotate-180 transition-opacity hover:opacity-75'/></button>
                <h3 className='text-white'><span className='text-[20px]'>0{currentSlideIndex}/</span><span className='text-[15px]'>0{TOTAL_SLIDES}</span></h3>
                <button onClick={plus}><img src="/images/right-arrow 2.svg" alt="Next" className='h-6 w-6transition-opacity hover:opacity-75' /></button>
                </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default CarousalCard
