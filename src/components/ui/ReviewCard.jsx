import React from "react";

const ReviewCard = ({ name, rating, image, review }) => {
  return (
    <div
      className={`
        w-full max-w-lg mx-auto overflow-hidden bg-cover bg-center h-[350px] sm:h-[480px] md:h-[480px] 
    [@media(min-width:395px)_and_(max-width:640px)]:h-[380px]
    [@media(min-width:395px)_and_(max-width:640px)]:max-w-[390px]
   
     
      `}
      style={{ backgroundImage: "url('/images/Rectangle 7.svg')" }}
    >
      
      <div
        className="
          flex flex-col pt-[50px] pl-[30px] pr-[30px] sm:pt-20 sm:pl-[50px] sm:pr-[45px] md:pt-[90px] md:pl-[58px] md:pr-[51px] gap-6  sm:gap-10  md:gap-[61px] "
      >
        
        <div
          className="
            flex items-center gap-[15px] sm:gap-[25px] md:gap-[38px] "
        >
          <img
            src={image}
            alt="image"
            className="
              rounded-full object-cover w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[88px] md:h-[88px]"
          />

          
          <div className="flex flex-col">
            <h2 className="
              text-white font-semibold text-[20px] sm:text-[28px] md:text-[38px]
              [@media(min-width:395px)_and_(max-width:640px)]:text-[28px]
            ">
              {name}
            </h2>
            <img
              src={rating}
              alt="rating"
              className="
                text-brand-accent mt-1 
                w-20 sm:w-[100px] md:w-[131px]
                 
              "
            />
          </div>
        </div>

        <div className="">
          <p className="
            text-[#ffffff] opacity-75 font-normal text-center md:text-left text-[15px] leading-[140%] sm:text-[20px] sm:leading-[120%] md:text-[24px] md:leading-[100%]
          ">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;