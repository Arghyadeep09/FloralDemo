import React from "react";
import Navbar from "../layout/Navbar.jsx";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-full h-[2592px]">
        <div className="max-w-screen-2xl w-full mx-auto ">
          <Navbar />
        </div>
      </div>
      {/* <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-[1728px] h-[2592px]">
       <Navbar /> 
       </div> */}
    </>
  );
};

export default HeroSection;
