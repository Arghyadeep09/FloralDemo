import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../ui/Button.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import CartButton from "../ui/CartButton.jsx";
import PlantCarousal from "../ui/PlantCarousal.jsx";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/images/homePlant.jpg')] bg-cover bg-center w-full " id="home">
        <div className="max-w-screen-2xl w-full mx-auto">
          <div className="max-w-screen-2xl w-full mx-auto ">
            <Navbar />
          </div>

          {/*Top section*/}
          <div className="  flex flex-col gap-[50px] md:gap-0 lg:gap-[50px] lg:flex-row items-start  ">
            <div className="flex flex-col gap-[130px] md:gap-[173px]">
              <div className="w-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] xl:max-w-[802px] ml-5 md:ml-[39px] mt-[120px] md:mt-[147px] ">
                <h2 className="text-[44px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[118px] font-semibold font-['Inter'] text-[#ffffff]  opacity-75 ">
                  Earth’s Exhale
                </h2>
                <p className=" text-[15px] sm:text-[16px] md:text-[19px] lg:text-[20px] xl:text-[23px] font-medium leading-4 md:leading-[100%] tracking-[0%] text-[#ffffff] opacity-75 mr-0 md:mr-5">
                  "Earth Exhale" symbolizes the purity and vitality of the
                  Earth's natural environment and its essential role in
                  sustaining life.
                </p>
                <div className="flex items-center gap-[21px] mt-[15px]">
                  <Button content="Buy Now" className=" opacity-75 " />
                  <div className="flex items-center gap-2 md:gap-[21px]">
                  <span>
                    <button className="h-[30px] lg:h-[70px] w-[30px] md:h-[50px]  md:w-[50px] lg:w-[70px] border-2 border-[#ffffff] rounded-full relative p-[13px] md:-[17px] lg:p-[18px] opacity-75  ">
                      <img
                        src="/images/Polygon 2.svg"
                        alt="play button"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[11px] md:w-[25px] lg:w-[34px] h-[11px] md:h-[25px] lg:h-[34px] filter brightness-0 invert opacity-75"
                      />
                    </button>
                  </span>
                  <span
                    className="text-[#ffffff] opacity-75 font-['Indie_Flower'] text-[14px] md:text-[18px] lg:text-[25px]"
                  >
                    Live Demo...
                  </span>
                  </div>
                </div>
              </div>

              <div className="p-px rounded-3xl border border-amber-50/30 w-[300px] md:w-[409px] h-[250px] md:h-[237px] backdrop-blur-[17px] ml-5 md:ml-[43px] ">
                <div className="w-full h-full rounded-[26px] p-[27px] pt-[37px]">
                  <div className="flex gap-5 md:gap-7 items-start">
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

            
              <PlantCarousal />
            
          </div>

          {/**Bottom section containing two cards */}
          <div className="flex flex-col gap-[79px] pb-[117px] overflow-hidden">
            <div className="w-full text-center ">
              <SectionTitle title="Our Trendy plants" className="mt-[50px] md:mt-[70px] lg:mt-[83px] " />
            </div>

            <div className="flex flex-col gap-[127px] mx-[30px] md:mx-10 lg:mx-[55px] ">
              <div className=" border-2 border-amber-50/30 backdrop-blur-[15px]  rounded-[120px] flex  items-center pb-0 md:pb-[60px] lg:pb-[50px] ">
                <div className="flex flex-col xl:flex-row gap-[5px] md:gap-0 lg:gap-[21px] xl:gap-[179px] items-center">
                  
                  <img
                    src="/images/homepic1.svg"
                    alt="Lily"
                    className="max-w-[300px] lg:max-h-[500px] lg:max-w-[500px] xl:max-w-[601px] md:max-w-[400px] max-h-[300px] md:max-h-[400px] xl:max-h-[732px] 
                    -mt-[110px] md:-mt-[170px] lg:-mt-[150px] "
                  />

                  <div className="mr-0 lg:mr-[45px] flex flex-col gap-[15px] md:gap-[18px] lg:gap-[25px] xl:gap-[34px] mx-6 md:mx-0  lg:mx-0 mt-0 px-0 md:px-8 md:-mt-[83px] lg:items-center  ">
                    <h2
                      className=" text-[20px] md:text-[30px] lg:text-[35px] xl:text-[38px] text-[#ffffff] font-semibold font-['Inter']
                          "
                    >
                      For Your Desks Decorations
                    </h2>

                    <div className="flex flex-col gap-2 md:gap-2 lg:gap-3 xl:gap-6 xl:items-start lg:items-center ">
                      <p
                        className=" text-[13px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#ffffff] font-normal md:font-semibold font-['Inter']
                                 leading-3.5 md:leading-[100%]"
                      >
                        I recently added a beautiful desk decoration plant to my
                        workspace, and it has made such a positive difference!
                      </p>
                      <p className=" text-[20px] md:text-[26px] lg:text-[35px] xl:text-[38px] text-[#ffffff] font-semibold font-['Inter'] ">
                        Rs. 599/-
                      </p>

                      <div className="flex items-center gap-[15px] md:gap-8 pb-[50px]  md:pb-0">
                        <Button content="Explore"  />
                        <CartButton  />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className=" border-2 border-amber-50/30 backdrop-blur-[15px] rounded-[120px] pb-0 xl:pb-[130px]">
                <div className="flex flex-col xl:flex-row gap-[130px] md:gap-20 lg:gap-[130px] items-center">

                    <div className="ml-5 md:ml-[72px]  flex flex-col gap-[15px] md:gap-[34px] mx-6 md:mx-0 lg:items-center xl:items-start">
                          <h2
                            className="  text-[20px] md:text-[30px] lg:text-[35px] xl:text-[38px] text-[#ffffff] font-semibold font-['Inter'] pt-[60px] md:pt-10
                                "
                          >
                            For Your Desks Decorations
                          </h2>

                          <div className="flex flex-col gap-2 md:gap-2 lg:gap-3 xl:gap-6 xl:items-start lg:items-center">
                        <p
                          className=" text-[13px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#ffffff] font-normal md:font-semibold font-['Inter']
                                  leading-[100%]"
                        >
                          The greenery adds a touch of nature and serenity to my
                          desk, making it feel more inviting and calming
                        </p>
                        <p className="  text-[20px] md:text-[26px] lg:text-[38px] text-[#ffffff] font-semibold font-['Inter'] ">
                          Rs. 399/-
                        </p>

                        <div className="flex items-center gap-[15px] md:gap-8">
                          <Button content="Explore" />
                          <CartButton  />
                        </div>
                      </div>
                    </div>

                    <img
                      src="/images/homepic2.svg"
                      alt="Lily"
                      className="max-w-[300px] md:max-w-[500px] md:max-h-[500px] lg:max-h-[500px] lg:max-w-[500px] xl:max-w-[732px] max-h-[300px] xl:max-h-[732px]  -mt-[150px]  md:-ml-[55px] -mb-[100px] md:-mb-[150px] lg:-mb-[180px] "
                    />
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
