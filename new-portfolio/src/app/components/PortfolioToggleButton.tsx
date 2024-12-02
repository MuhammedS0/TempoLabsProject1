'use client';
import React, { useState } from "react";

const PortfolioToggleButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-[367px] h-[82px] p-2.5 bg-white/10 rounded-[50px] border-2 border-white backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
        {/* Left Button: Portfolio */}
        <div
          className={`${
            hovered
              ? "grow shrink basis-0 h-[54px] px-5 py-2.5"
              : "w-52 h-[62px] px-5 py-2.5 bg-[#fd8439] border border-[#cfd4dc]"
          } rounded-[60px] justify-center items-center inline-flex`}
        >
          <div
            className={`${
              hovered ? "font-light" : "font-medium"
            } text-white text-[25.69px] font-['Lufga']`}
          >
            Portfolio
          </div>
          {!hovered && (
            <div className="w-[42px] h-[42px] relative flex justify-center items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon / outlined / directions / straight arrows / up right">
                  <path
                    id="Vector"
                    d="M12.25 29.75L29.75 12.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12.25 12.25H29.75V29.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>

        {/* Right Button: Hire Me */}
        <div
          className={`${
            hovered
              ? "w-52 h-[62px] px-5 py-2.5 bg-[#fd8439] border border-[#cfd4dc]"
              : "grow shrink basis-0 h-[54px] px-5 py-2.5"
          } rounded-[60px] justify-center items-center inline-flex`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`${
              hovered ? "font-medium" : "font-light"
            } text-white text-[25.69px] font-['Lufga']`}
          >
            Hire me
          </div>
          {hovered && (
            <div className="w-[42px] h-[42px] relative flex justify-center items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon / outlined / directions / straight arrows / up right">
                  <path
                    id="Vector"
                    d="M12.25 29.75L29.75 12.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12.25 12.25H29.75V29.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioToggleButton;