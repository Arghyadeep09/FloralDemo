import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../ui/Button.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import CartButton from "../ui/CartButton.jsx";
import PlantCarousal from "../ui/PlantCarousal.jsx";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-full ">
        <div className="max-w-screen-2xl w-full mx-auto">
        <div className="max-w-screen-2xl w-full mx-auto ">
          <Navbar />
        </div>

        {/*Top section*/}
        <div className="flex justify-between">
          <div>
            <div className="w-full max-w-[802px] ml-[43px] mt-[147px] mb-[173px]">
              <h2 className=" text-[118px] font-semibold font-['Inter'] text-[#ffffff]  opacity-75 ">
                Earth’s Exhale
              </h2>
              <p className=" text-[23px] font-medium leading-[100%] tracking-[0%] text-[#ffffff] opacity-75">
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

          <PlantCarousal/>
        </div>

        {/**Bottom section containing two cards */}
        <div className="flex flex-col gap-[79px] pb-[117px]">
            <div className="w-full text-center ">
              <SectionTitle title="Our Trendy plants" className="mt-[83px] " />
            </div>

          <div className="flex flex-col gap-[127px] ">

                  <div className="max-h-[526px] max-w-[1619px] border-2 border-amber-50 backdrop-blur-[15px] mx-[55px] rounded-[120px] flex justify-between items-center "> 

                    <div className="flex gap-[179px] items-center">
                    <img src="/images/homepic1.svg" alt="Lily" className="max-w-[601px] max-h-[732px] -mt-[150px]" /> 

                    <div>

                      <h2 className="  text-[38px] text-[#ffffff] font-semibold font-['Inter']
                      mb-[34px] ">For Your Desks Decorations</h2>
                      <p className=" text-[20px] text-[#ffffff] font-semibold font-['Inter']
                      mb-6 mr-[45px] leading-[100%]">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                      <p className=" text-[38px] text-[#ffffff] font-semibold font-['Inter'] mb-6">Rs. 599/-</p>

                      <div className="flex items-center gap-8">
                        <Button content="Explore"/>
                        <CartButton className="h-16 w-16"/>
                      </div>
                    </div> 
                  
                  </div>
                  </div>

                <div className="max-h-[526px] max-w-[1619px] border-2 border-amber-50 backdrop-blur-[15px] mx-[55px] rounded-[120px] flex justify-between items-center  "> 
                    
                  <div className="flex gap-[113px] items-center">
                  <div className="ml-[72px]">
                      <h2 className="h-[46px]  text-[38px] text-[#ffffff] font-semibold font-['Inter']
                      mb-[34px] ">For Your Desks Decorations</h2>
                      <p className="h-12 w-[732px] text-[20px] text-[#ffffff] font-semibold font-['Inter']
                      mb-6 mr-[45px] leading-[100%]">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                      <p className=" h-[46px] text-[38px] text-[#ffffff] font-semibold font-['Inter'] mb-6">Rs. 399/-</p>

                      <div className="flex items-center gap-8">
                        <Button content="Explore"/>
                        <CartButton className="h-16 w-16"/> 
                      </div>
                    </div> 
                    <img src="/images/homepic2.svg" alt="Lily" className="max-w-[732px] max-h-[732px] -mt-[150px] -ml-[55px] " /> 

                    </div>

                </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;