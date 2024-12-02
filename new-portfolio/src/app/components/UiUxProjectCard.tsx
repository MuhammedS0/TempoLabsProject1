import React from "react";

const UiUxProjectCard: React.FC = () => {
  return (
    <div className="relative h-[432px] w-[416px] rounded-lg group overflow-hidden transition-all duration-300 bg-transparent">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/508b/1c6f/3cdaf2a5a0ec054eea65e8d507512dda?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOF1owEo78TvNINemgiDkxiSE4R20iAoMeNK-8g12Yg~VMfuAgGyPBKnCY7sVGwRc2AbuRIIuAkljCxVu~6j1FzSAHcd31kRJ2D8YRcvXrEibjMBFQo-YH5UQxo-CemvVKf7TVJlFW95QPlR2J~qeTJ5tbIGYG8wEQ-3N0bWM0SOTZqEmsZHUdRWbr2MYtpl7OVP2KP1~1x3D8HUCwawMReQgbATCObXMSecsPrSxImKPCkf26LneNKFLQtP3vVJ8DHfv7Hm-pvKAZbWzQ3UkCTdg7uJTbxQgVwZNw9Y1kUiKcdCaJE5J7brMc2YppMKpHZi0G~jIxoTjDz4Tldyog__')", // Ensure Rectangle6.png exists in the public folder
        }}
      ></div>

      {/* Enlarged Transparent Circular Div Around Circle */}
      <div className="absolute bottom-[-30px] right-[-30px] w-[200px] h-[200px] rounded-full border border-transparent flex items-center justify-center">
        {/* Circle Button */}
        <div className="w-[114px] h-[114px] p-[21px] bg-[#1d2838] rounded-full border-2 flex justify-center items-center group-hover:bg-[#fd8439] transition-all duration-300">
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
    </div>
  );
};

export default UiUxProjectCard;
