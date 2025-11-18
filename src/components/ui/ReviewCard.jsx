import React from "react";

const ReviewCard = ({ name, rating, image, review }) => {
  return (
    <div
     className={`
        w-full max-w-lg 
        h-[480px]
        mx-auto 
        overflow-hidden 
        bg-cover bg-center
      `}
      style={{ backgroundImage: "url('/images/Rectangle 7.svg')"}}
    >

      {/* Content */}
      <div
        className="
          pl-[58px] pr-[51px] pt-[90px] flex flex-col gap-[61px]
        "
      >
        {/* Top: avatar + name + rating */}
        <div
          className="
            flex items-center space-x-3 gap-[38px]
          "
        >
          <img
            src={image}
            alt="image"
            className="
              w-[88px] h-[88px]
              rounded-full object-cover
            "
          />

          <div className="flex flex-col">
            <h2 className="text-white font-semibold text-[38px] ">
              {name}
            </h2>
            <img src={rating} className="text-brand-accent w-[131px] text-xs sm:text-sm mt-1">
              
            </img>
          </div>
        </div>

        {/* Bottom: review text */}
        <div className="">
          <p className="text-gray-300 text-[24px] leading-relaxed line-clamp-4 font-normal  ">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;