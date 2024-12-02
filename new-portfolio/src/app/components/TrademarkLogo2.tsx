import React from "react";

const TrademarkLogo2: React.FC = () => {
  return (
    <div className="w-[307px] h-[86px] px-10 py-5 rounded-[60px] border justify-center items-center gap-2.5 inline-flex bg-[#333]">
      {/* Left Circular Container */}
      <div className="w-[46px] h-[46px] px-[5px] bg-[#fd8439] rounded-[50px] flex justify-center items-center">
        <svg
          width="31"
          height="20"
          viewBox="0 0 31 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M27.4405 13.5953C26.3478 14.7882 25.0063 15.526 23.3832 15.5885C20.3183 15.7063 17.9458 13.9061 17.652 11.6538C17.0673 7.17027 19.9865 4.41119 23.1836 4.41119C24.8104 4.41119 26.0214 5.03278 27.0965 6.02935L29.9014 2.87049C28.3793 1.36612 26.0383 0 23.1836 0C20.4196 0 17.9322 0.914031 16.0461 2.62151V0.407595H2.14611V4.68734H10.9402V11.4952C10.9402 14.5861 9.76312 15.5885 7.47233 15.5885C5.98444 15.5885 4.46199 14.7186 3.17373 13.1089L0.246094 16.2749C2.20915 19.0211 5.14391 20 7.64145 20C11.5069 20 13.8099 18.5884 15.0012 16.4611C16.9402 18.801 19.7824 20 22.8575 20C25.8885 20 28.4084 18.8625 30.2461 16.6852L27.4405 13.5953Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Right Text Container */}
      <div className="flex flex-col justify-start items-start gap-1 ml-3">
        {/* "Made by" Text */}
        <div className="text-[#98a1b2] text-sm font-normal font-['Lufga']">
          Made by
        </div>

        {/* "Jayesh Patil" Text */}
        <div className="text-white text-xl font-semibold font-['Lufga']">
          Jayesh Patil
        </div>
      </div>
    </div>
  );
};

export default TrademarkLogo2;
