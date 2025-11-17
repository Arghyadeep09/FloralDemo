const Footer = () => {
  return (
    <div className="w-full  py-20">
      <div className="max-w-[1728px] w-full mx-auto flex justify-between flex-wrap gap-[60px] items-start px-[99px] text-white">

        {/* Logo + Text Section */}
        <div className="flex flex-col gap-[43px] max-w-[600px]">
          <div className="flex items-center gap-10">
            <img
              src="/images/logoPlant.png"
              alt="logo"
              className="h-[94px] w-[94px]"
            />
            <h2 className="text-[45px] font-black">FloraVision.</h2>
          </div>

          <p className="text-[28px] font-medium leading-[120%]">
            "From lush indoor greens to vibrant outdoor blooms, our plants
            are crafted to thrive and elevate your living environment."
          </p>

          <div className="text-[28px] font-extrabold flex gap-[40px]">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-[46px]">
          <p className="text-[28px] font-extrabold">Quick Link's</p>
          <ul className="text-[24px] font-medium flex flex-col gap-[26px] underline">
            <li>Home</li>
            <li>Type’s Of plant’s</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Updates / Rights */}
        <div className="flex flex-col justify-between">
          <p className="text-[28px] font-extrabold mb-[50px]">For Every Update.</p>
          <p className="text-[24px] font-medium mt-auto pt-[120px]">
            FloraVision © All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
