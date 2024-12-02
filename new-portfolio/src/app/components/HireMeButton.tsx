"use client";
import React, { useState } from "react";

const HireMeButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[202px] h-[62px] px-5 py-2.5 bg-[#fd8439] rounded-[60px] justify-center items-center inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text */}
      <div className="text-white text-[25.69px] font-medium font-['Lufga']">
        Hire me
      </div>
      {/* SVG Container */}
      <div className="w-[42px] h-[42px] relative flex justify-center items-center">
        {/* Conditionally Rendered SVG */}
        {isHovered ? (
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon / outlined / directions / straight arrows / up right">
              <path
                id="Vector"
                d="M12.75 29.75L30.25 12.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M12.75 12.25H30.25V29.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon / outlined / directions / straight arrows / up right">
              <path
                id="Vector"
                d="M11.0009 20.9538L27.8752 20.9533"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M21.5 8.62549L33.8744 20.9999L21.5 33.3742"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default HireMeButton;
