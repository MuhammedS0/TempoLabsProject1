
import React from "react";

const BlogPost: React.FC = () => {
  return (
    <div className="relative h-[432px] w-[416px] rounded-lg group overflow-hidden transition-all duration-300 bg-transparent">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Rectangle6.png')", // Ensure Rectangle6.png exists in the public folder
        }}
      ></div>

      {/* Circle Button */}
      <div className="absolute bottom-0 right-1 w-[114px] h-[114px] p-[21px] pl-4 bg-[#1d2838] rounded-full border-2 flex justify-center items-center group-hover:bg-[#fd8439] transition-all duration-300">
        {/* Arrow Icon */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon / outlined / directions / straight arrows / up right">
            <path
              d="M21 51L51 21"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21H51V51"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BlogPost;

