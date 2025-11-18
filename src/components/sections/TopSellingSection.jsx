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
    <div className="w-full bg-[#62ff00]">
      <section className=" mx-auto max-w-[1728px] w-full  pt-44 bg-[#1b2316]">
        <div className="w-full text-center ">
          <SectionTitle title="Our Top Selling Plants" className="mb-[197px]" />
        </div>

        {/* This is the product card section */}
        <div
          className='grid
        grid-cols-1
        gap-y-[120px] gap-x-[50px]
        max-w-[1728px] w-full mx-auto
        mt-16
        md:grid-cols-[repeat(auto-fit,512px)]
        justify-center
      "
                   '
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
            className="mt-[310px] mb-[174px]"
          />
        </div>
        
        {/* This is the review card section*/}

        <div
          className="grid 
                   grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(512px,1fr))]
                   gap-x-[50px] gap-y-[185px] 
                   max-w-[1728px] w-full mx-auto "
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
          <SectionTitle title="Our Best o2" className="mt-[233px] mb-[242px]" />
        </div>
        <CarousalCard />
        <Footer />
      </section>
    </div>
  );
};

export default TopSellingSection;
