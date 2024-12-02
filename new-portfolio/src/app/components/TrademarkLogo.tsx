import React from "react";

const TrademarkLogo: React.FC = () => {
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
      <div className="justify-center items-center gap-[3px] flex">
        {/* JCREA Letters */}
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M0.246094 16.3816L2.62656 13.7848C3.67155 15.1071 4.90676 15.8218 6.11622 15.823C7.97636 15.823 8.93378 15.0021 8.93536 12.4629L8.9417 4.08219L1.79952 4.07495L1.80229 0.556641L13.09 0.565494L13.0809 12.8081C13.0781 16.442 11.3103 19.448 6.25095 19.4452C4.22199 19.444 1.83915 18.6391 0.246094 16.3816Z"
            fill="white"
          />
        </svg>
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M0.0898481 10.0949C0.0946035 3.94998 3.93378 0.386604 8.83262 0.390628C11.1509 0.390628 13.0518 1.51497 14.2878 2.7524L12.0068 5.34596C11.135 4.52584 10.1514 4.01437 8.82984 4.01316C6.2338 4.01316 4.3364 6.24737 4.33403 9.96004C4.33086 13.7701 6.22469 15.9826 8.9836 15.9866C10.3024 15.9866 11.3914 15.3315 12.2795 14.3528L14.5557 16.892C13.0629 18.6804 11.0157 19.6124 8.55403 19.6103C4.00828 19.6047 0.0850927 16.3488 0.0898481 10.0949Z"
            fill="white"
          />
        </svg>
        {/* Repeat additional letter SVGs */}
        <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector"
            d="M14.9962 19.2747L10.8661 11.8549C12.819 10.9612 14.1263 9.23481 14.1283 6.51167C14.1319 2.10201 10.945 0.734611 7.07093 0.731392L0.569535 0.726562L0.555664 19.2622L4.70275 19.2654L4.70751 12.5978H6.88151L10.366 19.2678L14.9962 19.2747ZM4.71385 4.05936H6.73132C8.90612 4.05936 10.0724 4.67707 10.0708 6.50684C10.0708 8.32133 8.90215 9.26861 6.72736 9.267H4.70989L4.71385 4.05936Z"
            fill="white"
          />
        </svg>
        <svg 
            width="13" 
            height="20" 
            viewBox="0 0 13 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector"
            d="M0.010756 0.727539L12.133 0.736795L12.1302 4.2539L4.14754 4.24786L4.14477 7.96537L10.9271 7.9706L10.9244 11.4877L4.14199 11.4825L4.13882 15.7481L12.4025 15.7545L12.3997 19.2728L-0.00390625 19.2632L0.010756 0.727539Z"
            fill="white"
          />
        </svg>
        <svg 
            width="17" 
            height="20" 
            viewBox="0 0 17 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector"
            d="M12.3657 19.2686L16.7541 19.2722L11.0734 0.732137L6.11237 0.728516L0.402344 19.2597L4.6386 19.2629L5.75809 14.8553L11.2617 14.8593L12.3657 19.2686ZM6.58791 11.5873L7.02382 9.88023C7.48826 8.02912 7.99827 5.8593 8.44766 3.90357H8.5598C8.99888 5.8601 9.55328 8.03194 10.0153 9.88264L10.4433 11.5905L6.58791 11.5873Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default TrademarkLogo;