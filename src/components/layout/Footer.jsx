import React from "react";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubscribe = () => {
    setError("");
    setSuccess("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }
    setSuccess("Subscribed successfully!");
    setEmail("");
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="w-full mt-20 xl:mt-[280px] pb-10" id="contact">
      <div
        className="max-w-[1728px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                   gap-y-12 md:gap-y-16 xl:gap-x-[129px] xl:gap-y-20 text-white px-6 md:px-12 xl:px-20"
      >
        <div className="flex flex-col items-center xl:items-start gap-6 xl:gap-[43px]">
          <div className="flex items-center gap-[13px]">
            <img
              src="/images/logoPlant.png"
              alt="logo"
              className="h-[60px] w-[60px] xl:h-[94px] xl:w-[94px]"
            />
            <h2 className="text-3xl xl:text-[45px] font-['Inter'] opacity-75">
              FloraVision.
            </h2>
          </div>

          <p className="text-lg xl:text-[28px] font-medium leading-snug xl:leading-[100%] tracking-wide max-w-[580px] text-center xl:text-left">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          {/* Social Icons */}
          <div className="text-xl xl:text-[28px] font-extrabold flex gap-10 mb-4 xl:mb-[141px]">
            <p className="cursor-pointer hover:text-gray-300">FB</p>
            <p className="cursor-pointer hover:text-gray-300">TW</p>
            <p className="cursor-pointer hover:text-gray-300">LI</p>
          </div>
        </div>

        <div className="flex flex-col items-center xl:items-start gap-6 xl:gap-[46px]">
          <p className="text-2xl xl:text-[28px] font-extrabold">Quick Link's</p>
          <ul className="text-lg xl:text-[24px] font-medium flex flex-col items-center xl:items-start gap-4 xl:gap-[26px] underline">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">
              Type’s Of plant’s
            </li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
            <li className="cursor-pointer hover:text-gray-300">Privacy</li>
          </ul>
        </div>

        <div className="flex flex-col h-full items-center xl:items-start md:col-span-2 xl:col-span-1 w-full">
          <p className="text-2xl xl:text-[28px] font-extrabold mb-6 xl:mb-[50px]">
            For Every Update.
          </p>

          <div className="relative h-auto min-h-[60px] xl:h-[74px] w-full max-w-[562px] rounded-lg mb-3 flex flex-wrap md:flex-nowrap items-center justify-between border-2 border-white p-1">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="bg-transparent outline-none text-white text-[18px] xl:text-[22px] w-full md:w-auto pl-4 md:pl-[29px] py-2 placeholder-gray-400 xl:pr-[170px]"
            />

            <button
              onClick={handleSubscribe}
              className="w-full md:w-auto mt-2 md:mt-0 mr-0 md:mr-1 h-12 md:h-16 py-2 md:py-[18px] px-5 bg-white text-black text-lg xl:text-[22px] font-bold rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all xl:absolute xl:top-1/2 xl:right-2 xl:-translate-y-1/2 xl:h-[60px] xl:px-8 xl:mt-0 xl:w-auto  lg:absolute lg:top-1/2 lg:right-2 lg:-translate-y-1/2 lg:h-[60px] lg:px-8 lg:mt-0 lg:w-auto"
            >
              SUBSCRIBE
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm md:text-base mb-3">{error}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm md:text-base mb-3">
              {success}
            </p>
          )}

          <p className="text-lg xl:text-[24px] font-medium mt-auto mb-10 xl:mb-[141px] text-center xl:text-left">
            FloraVision © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
