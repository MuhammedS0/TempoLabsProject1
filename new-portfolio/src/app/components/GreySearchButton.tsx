import React from "react";

const GreySearchButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="w-[92px] h-[92px] p-[21px] origin-top-left -rotate-90 bg-[#808080] rounded-[57px] border-2 justify-center items-center flex"
      >
        <svg 
            width="50" 
            height="50" 
            viewBox="0 0 50 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-[90deg]">
            <g id="UI icon/search/light">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M37.5003 22.917C37.5003 30.9711 30.9711 37.5003 22.917 37.5003C14.8628 37.5003 8.33366 30.9711 8.33366 22.917C8.33366 14.8628 14.8628 8.33366 22.917 8.33366C30.9711 8.33366 37.5003 14.8628 37.5003 22.917ZM37.5668 34.6205C40.1327 31.4129 41.667 27.3441 41.667 22.917C41.667 12.5617 33.2723 4.16699 22.917 4.16699C12.5617 4.16699 4.16699 12.5617 4.16699 22.917C4.16699 33.2723 12.5617 41.667 22.917 41.667C27.3441 41.667 31.4129 40.1327 34.6205 37.5668L40.1939 43.1401C41.0074 43.9537 42.3265 43.9537 43.1401 43.1401C43.9537 42.3265 43.9537 41.0074 43.1401 40.1939L37.5668 34.6205Z" fill="white"/>
            </g>
        </svg>
      </button>
    </div>
  );
};

export default GreySearchButton;
