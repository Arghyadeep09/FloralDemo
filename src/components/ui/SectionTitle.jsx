import React from "react";
// Assuming you import your SVGs (e.g., using @svgr/webpack or a similar loader)
// If you manually copy-paste the SVG code, skip these lines.
// SVGs will be used as <img> from public/images

const SectionTitle = ({ title, className }) => {
  // Determine the vertical shift for perfect alignment
  // The design shows the top-edge of the text aligns with the top of the bracket line.
  // Based on the 'Top' value in your design (26.47px), using a small top offset is still needed.
  const topOffset = "3px"; // Adjust this value (e.g., 25px or 28px) until the alignment is perfect.

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