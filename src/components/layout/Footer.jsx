import Button from "../ui/Button";

const Footer = () => {
  return (
    <div className="w-full mt-[280px]">
      
      {/* 💡 CHANGE 1: Use grid and grid-cols-3 for large screens */}
      <div 
        className="max-w-[1728px] w-full 
                   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                   gap-x-[129px] gap-y-20 
                    text-white"
      >

        {/* Column 1: Logo + Text Section (Max width restricted for layout balance) */}
        <div className="flex flex-col gap-[43px] ml-[85px]">
          <div className="flex items-center gap-[13px]">
            <img
              src="/images/logoPlant.png"
              alt="logo"
              className="h-[94px] w-[94px] "
            />
            <h2 className="text-[45px] font-['Inter'] opacity-75">FloraVision.</h2>
          </div>

          <p className="text-[28px] font-medium leading-[100%] tracking-[100%] max-w-[580px] ">
            "From lush indoor greens to vibrant outdoor blooms, our plants
            are crafted to thrive and elevate your living environment."
          </p>

          <div className="text-[28px] font-extrabold flex gap-10 mb-[141px]">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-[46px]">
          <p className="text-[28px] font-extrabold">Quick Link's</p>
          <ul className="text-[24px] font-medium flex flex-col gap-[26px] underline">
            <li>Home</li>
            <li>Type’s Of plant’s</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Column 3: Updates / Rights */}
        {/* Removed redundant justify-between since Flexbox is only used for vertical stack */}
        <div className="flex flex-col h-full">
          <p className="text-[28px] font-extrabold mb-[50px]">For Every Update.</p>
          
          {/* 💡 CHANGE 2: Added a placeholder for the subscription input (assuming it exists in the design) */}
          <div className=" h-[74px] max-w-[562px] rounded-lg mb-[120px] flex items-center justify-between border-2 border-[#ffffff]  ">
              <span className='text-gray-400 text-[24px] py-[22px] pl-[29px]  '>Enter Email </span>
              <button className="my-1 mr-1 h-16 py-[18px] px-5 bg-[#ffffff] text-[#000000]
              text-[22px] font-bold leading-relaxed tracking-[0%] rounded-lg flex items-center justify-center">SUBSCRIBE</button>
          </div>
          
          <p className="text-[24px] font-medium mt-auto mb-[141px]">
            FloraVision © All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;