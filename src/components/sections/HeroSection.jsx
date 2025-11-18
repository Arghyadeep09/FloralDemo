import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../ui/Button.jsx";
import PlantCard from "../ui/PlantCard.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import CartButton from "../ui/CartButton.jsx";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-full h-[2592px]">
        <div className="max-w-screen-2xl w-full mx-auto ">
          <Navbar />
        </div>

        {/*Top section*/}
        <div className="flex justify-between">
          <div>
            <div className="max-h-[280px] max-w-[802px] ml-[43px] mt-[147px] mb-[173px]">
              <h2 className="h-[143px] text-[118px] font-semibold font-['Inter'] text-[#ffffff]  opacity-75 ">
                Earth’s Exhale
              </h2>
              <p className="h-14 text-[23px] font-medium leading-[100%] tracking-[0%] text-[#ffffff] opacity-75">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's
                natural environment and its essential role in sustaining life.
              </p>
              <div className="flex items-center  gap-[21px] mt-[15px]">
                <Button content="Buy Now" className=" opacity-75" />{" "}
                <span>
                  <button className="h-[70px] w-[70px] border-2 border-[#ffffff] rounded-full relative p-[18px] opacity-75  ">
                    <img
                      src="/images/Polygon 2.svg"
                      alt="play button"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] filter brightness-0 invert opacity-75"
                    />
                  </button>
                </span>{" "}
                <span
                  className="text-[#ffffff] 
                opacity-75 font-['Indie_Flower'] text-[25px]"
                >
                  Live Demo...
                </span>
              </div>
            </div>

            <div className="p-px rounded-3xl border border-amber-50/30 w-[409px] h-[237px] backdrop-blur-[17px] ml-[43px] mt-[173px]">
              <div className="w-full h-full rounded-[26px] p-[27px] pt-[37px]">
                <div className="flex gap-7 items-start">
                  <img
                    src="/images/portrait.png"
                    alt="photo"
                    className="h-16 w-16 rounded-full"
                  />

                  <div className="text-[#ffffff]">
                    <h3 className="text-[22px] font-semibold leading-tight mb-1">
                      Ronnie Hamill
                    </h3>

                    <img
                      src="images/Group 7.svg"
                      alt="rating"
                      className="h-[15px] w-[103px]"
                    />
                  </div>
                </div>

                <div className="text-[#ffffff] opacity-75 mt-6">
                  <p>
                    I can't express how thrilled I am with my new natural
                    plants! They bring such a fresh and vibrant energy to my
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={` relative  w-full  max-w-lg mx-auto h-[644px] overflow-visible mt-[100px] mr-[52px] `}
          >
            <img
              src="/images/Rectangle 6.svg"
              alt="Decorative card background shape"
              className="absolute inset-0 w-full h-full object-fill z-0"
            />

            <img
              src="/images/Aglaonema plant.svg"
              alt="plant"
              className="  absolute -top-[70px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain z-10 "
            />
            <div
              className="relative z-1 h-full flex flex-col justify-end pt-[200px] pb-10 px-[66px]
              ml-[81px] mr-6"
              style={{ marginTop: "-170px" }}
            >
              <p
                className="text-gray-300 text-[14px] md:text-[18px] lg:text-[23px]  md:mt-3
               mt-0.5 opacity-75"
              >
                Indoor Plant
              </p>

              <h2 className="text-white font-normal text-[22px] md:text-[28px] lg:text-[38px] opacity-75 leading-[100%] tracking-[0%] w-[312px]">
                Aglaonema plant
              </h2>

              <div className="flex justify-between items-center mt-1 md:mt-3 lg:mt-[15px] gap-[75px]">
                <Button
                  content="Buy Now"
                  className="leading-[100%] tracking-[0%] opacity-75"
                />
                <img src="/images/right-arrow 2.svg" alt="right arrow" />
              </div>
            </div>
            <div className="flex justify-center items-center mt-9">
              <img src="/images/Group 31.svg " alt="Dot" />
            </div>
          </div>
        </div>

        {/**Bottom section containing two cards */}

        <div className="w-full text-center ">
          <SectionTitle title="Our Best o2" className="mt-[83px] mb-[79px]" />
        </div>

        <div className="max-h-[526px] max-w-[1619px] border-2 border-amber-50 backdrop-blur-[15px] mx-[55px] rounded-[120px] flex justify-between items-center "> 
          
          <img src="/images/homepic1.svg" alt="Lily" className="max-w-[601px] max-h-[732px] -mt-[150px]" /> 

          <div>

            <h2 className="h-[46px]  text-[38px] text-[#ffffff] font-semibold font-['Inter']
             mb-[34px] ">For Your Desks Decorations</h2>
            <p className="h-12 w-[732px] text-[20px] text-[#ffffff] font-semibold font-['Inter']
             mb-6 mr-[45px] leading-[100%]">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
            <p className="w-[171px] h-[46px] text-[38px] text-[#ffffff] font-semibold font-['Inter'] mb-6">Rs. 599/-</p>

            <div className="flex items-center gap-8">
              <Button content="Explore"/>
              <CartButton className="h-16 w-16"/>
            </div>
          </div> 
        
        </div>

        <div className="max-h-[526px] max-w-[1619px] border-2 border-amber-50 backdrop-blur-[15px] mx-[55px] rounded-[120px] flex justify-between items-center mt-[127px] "> 
           
         <div className="ml-[72px]">
            <h2 className="h-[46px]  text-[38px] text-[#ffffff] font-semibold font-['Inter']
             mb-[34px] ">For Your Desks Decorations</h2>
            <p className="h-12 w-[732px] text-[20px] text-[#ffffff] font-semibold font-['Inter']
             mb-6 mr-[45px] leading-[100%]">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
            <p className="w-[171px] h-[46px] text-[38px] text-[#ffffff] font-semibold font-['Inter'] mb-6">Rs. 599/-</p>

            <div className="flex items-center gap-8">
              <Button content="Explore"/>
              <CartButton className="h-16 w-16"/> 
            </div>
          </div> 
          <img src="/images/homepic2.svg" alt="Lily" className="max-w-[732px] max-h-[732px] -mt-[150px] -ml-[55px] " /> 
        </div>

        
      </div>
    </>
  );
};

export default HeroSection;
