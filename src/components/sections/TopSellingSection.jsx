import React from "react";
import PlantCard from "../ui/PlantCard.jsx";
import { demoProductData } from "../../utils/demoProductData.js";
import SectionTitle from "../ui/SectionTitle";
import { demoReviewData } from "../../utils/demoReviewData.js";
import ReviewCard from "../ui/ReviewCard.jsx";
import CarousalCard from "../ui/CarousalCard.jsx";
import Footer from "../layout/Footer.jsx";
const TopSellingSection = () => {
  return (
    <div className="w-full bg-[#1b2316]">
      <section className=" mx-auto max-w-[1728px] w-full  pt-44 bg-[#1b2316]">

        <div className="w-full text-center ">
          <SectionTitle title="Our Top Selling Plants" className="mb-[100px] md:mb-[197px]" />
        </div>

        {/* This is the product card section */}
        <div
          className='grid grid-cols-1 gap-y-[50px] md:gap-y-[120px] gap-x-[50px] max-w-[1728px] w-full mx-auto mt-2 md:mt-16 md:grid-cols-[repeat(auto-fit,512px)] justify-center'
        >
          {demoProductData.map((item) => (  
            <PlantCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        <div className="w-full text-center ">
          <SectionTitle
            title="Customer Review"
            className="mt-[50px] md:mt-[310px] mb-[50px] md:mb-[174px]"
          />
        </div>

        {/* This is the review card section*/}

        <div
          className=" grid grid-cols-1 gap-y-10 sm:gap-y-20 md:gap-y-16 lg:gap-y-[185px] gap-x-2 md:gap-x-4 lg:gap-x-8 w-full max-w-[1728px] mx-auto mt-10 md:mt-14 xl:mt-1 lg:grid-cols-[repeat(auto-fit,512px)] xl:grid-cols-[repeat(auto-fit,512px)]  justify-center "
        >
          {demoReviewData.map((data) => (
            <ReviewCard
              key={data.id}
              name={data.name}
              rating={data.rating}
              image={data.image}
              review={data.review}
            />
          ))}
        </div>
        <div className="w-full text-center ">
          <SectionTitle title="Our Best o2" className="mt-[100px] md:mt-[233px] mb-[100px] md:mb-[242px]" />
        </div>
        <CarousalCard />
        <Footer />
      </section>
    </div>
  );
};

export default TopSellingSection;
