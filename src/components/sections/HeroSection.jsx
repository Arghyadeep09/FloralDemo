import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../ui/Button.jsx";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-full h-[2592px]">
        <div className="max-w-screen-2xl w-full mx-auto ">
          <Navbar />   
        </div>

        <div>

            <div>
              <div className="max-h-[280px] max-w-[802px] ml-[43px] mt-[147px] mb-[173px]">
                <h2 className="h-[143px] text-[118px] font-semibold font-['Inter'] text-[#ffffff]  opacity-75 ">Earth’s Exhale</h2>
                <p className="h-14 text-[23px] font-medium leading-[100%] tracking-[0%] text-[#ffffff] opacity-75">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                <div className="flex items-center  gap-[21px]">
                <Button content="Buy Now" className="mt-[19px] opacity-75" /> <span><button><img src="/images/play-button.png" alt="play button" className="w-[70px] h-[70px] filter brightness-0 invert opacity-75 mt-[15px]"/></button></span> <span className="text-[#ffffff] 
                opacity-75">Live Demo...</span>
                </div>
              </div>
             
             <div className="p-px rounded-3xl bg-[linear-gradient(#ffffff,#666666)] w-[409px] h-[237px] backdrop-blur-[17px]">
              <div className="w-full h-full  rounded-[26px] bg-[#1c1f16]">
                  <div className="flex gap-7">
                    <img src="/images/portrait.png" alt="photo" className="h-16 w-16 rounded-full" />
                    <h3 className="text-[22px] max-w-[141px] text-[#ffffff]">
                      Ronnie Hamill
                      <p>
                        <img src="images/Group 7.svg" alt="rating" className="h-[15px] w-[103px]" />
                      </p>
                    </h3>     
                  </div>

                  <div className="text-[#ffffff] opacity-75">
                    <p>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                  </div>

              </div>
              </div>

            </div>

            <div>

            </div>

        </div>
      </div>
      
    </>
  );
};

export default HeroSection;
