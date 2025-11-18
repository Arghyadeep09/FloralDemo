import React from "react";
const SectionTitle = ({ title, className }) => {
  const topOffset = "3px"; 

  return (
    <div
      className={`
        relative inline-flex items-center drop-shadow-lg text-white text-[55px] font-semibold font-['Inter'] h-[67px] ${
          className || ""
        }
      `}
    >
      {/* 1. LEFT BRACKET as image */}
      <img
        src="/images/Vector 5.svg"
        alt="Bracket Left"
        style={{
          width: "61.5px",
          height: "63px",
          position: "absolute",
          left: "-9px",
          top: topOffset,
        }}
      />

      {/* 2. TITLE TEXT (Add padding to separate it from the brackets) */}
      <span className="relative z-10 ">{title}</span>

      {/* 3. RIGHT BRACKET as image */}
      <img
        src="/images/Vector 6.svg"
        alt="Bracket Right"
        style={{
          width: "61.5px",
          height: "63px",
          position: "absolute",
          right: "-10.5px",
          top: topOffset,
        }}
      />
    </div>
  );
};

export default SectionTitle;