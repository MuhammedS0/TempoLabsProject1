import React from "react";

const WhiteArrowButtonDown: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="w-[92px] h-[92px] origin-top-left -rotate-90 bg-white rounded-[57px] border-2 justify-center items-center flex"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-[180deg]" 
        >
          <g id="UI icon/arrow_down/light">
            <path
              id="Union"
              d="M8.33333 22.9167C7.18274 22.9167 6.25 23.8494 6.25 25C6.25 26.1506 7.18274 27.0833 8.33333 27.0833L37.6787 27.0833L27.6935 37.0685C26.8799 37.8821 26.8799 39.2012 27.6935 40.0148C28.5071 40.8284 29.8262 40.8284 30.6398 40.0148L42.7083 27.9463C44.3355 26.3191 44.3355 23.6809 42.7083 22.0537L30.6398 9.98519C29.8262 9.1716 28.5071 9.1716 27.6935 9.98519C26.8799 10.7988 26.8799 12.1179 27.6935 12.9315L37.6787 22.9167L8.33333 22.9167Z"
              fill="black"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default WhiteArrowButtonDown;
