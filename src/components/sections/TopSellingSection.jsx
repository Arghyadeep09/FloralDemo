import React from 'react';
import PlantCard from '../ui/PlantCard.jsx';
import {  demoProductData } from '../../utils/demoProductData.js'; 
import SectionTitle from '../ui/SectionTitle'; 
import { demoReviewData } from '../../utils/demoReviewData.js';
import ReviewCard from '../ui/ReviewCard.jsx';
const TopSellingSection = () => {
  return (
    
    <section className='w-full mx-auto max-w-[1728px] px-[47px] py-[100px] bg-[#1b2316]'> 

      <SectionTitle>Our Top Selling Plants</SectionTitle>


    {/* Thi is the product card section */}
      <div 
        className='grid 
                   grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(512px,1fr))]
                   gap-x-[50px] gap-y-[185px] 
                   max-w-[1728px] w-full mx-auto 
                   mt-16' 
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

      <SectionTitle>Our Top Selling Plants</SectionTitle>

      {/* This is the review card section*/}

      <div className='grid 
                   grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(512px,1fr))]
                   gap-x-[50px] gap-y-[185px] 
                   max-w-[1728px] w-full mx-auto '>

                    {demoReviewData.map((data)=>(
                      <ReviewCard
                      key={data.id}
                      name={data.name}
                      rating={data.rating}
                      image={data.image}
                      review={data.review}/>
                    ))}
        
      </div>   
    </section>
  );
};

export default TopSellingSection;