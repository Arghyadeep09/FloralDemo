import React from "react";
import CartButton from "../ui/CartButton";

const PlantCard = ({
  name,
  description,
  price,
  image,
  cardBackgroundUrl = "/images/Rectangle 6.svg",
  showDetails = true,
}) => {
  return (
    <div
      className={` relative w-full max-w-lg mx-auto h-[644px] overflow-visible `}
    >
      <img
        src={cardBackgroundUrl}
        alt="Decorative card background shape"
        className="absolute inset-0 w-full h-full object-fill z-0 transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer hover:z-20`}
"
      />

      <img
        src={image}
        alt={name}
        className=" absolute -top-[70px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain z-10"
      />

      <div className="relative z-1 h-full flex flex-col justify-end pt-[200px] pb-10 px-[66px] -mt-[180px] md:-mt-[100px] text-center md:text-left ">
        <h2 className="text-white font-semibold text-[25px] md:text-[28px] lg:text-[38px] opacity-75">
          {name}
        </h2>

        {showDetails && (
          <p
            className="text-white text-[16px] md:text-[18px] lg:text-[24px] mt-2 md:mt-3 opacity-75
                leading-[100%] tracking-[0%]"
          >
            {description}
          </p>
        )}

        {showDetails && (
          <div className="flex gap-[50px] md:gap-[148px] justify-center md:justify-between items-center mt-3 md:mt-4">
            <span className="text-white font-normal text-[19px] md:text-[30px] lg:text-[38px] opacity-75">
              Rs. {price}
            </span>
            <CartButton varient="cart" className="opacity-75" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCard;
