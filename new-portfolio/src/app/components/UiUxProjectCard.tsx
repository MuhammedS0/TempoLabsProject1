"use client";
import React, { useState } from "react";

const UiUxProjectCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="relative">
          <svg
            width="456"
            height="618"
            viewBox="0 0 456 618"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g filter="url(#filter0_d_26_297)">
              <mask
                id="mask0_26_297"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="20"
                y="51"
                width="416"
                height="508"
              >
                <path
                  d="M20 88C20 67.5655 36.5655 51 57 51H399C419.435 51 436 67.5655 436 88V389.5C436 409.935 419.435 426.5 399 426.5H376.049C337.534 426.5 306.476 458.031 307.057 496.541L307.433 521.442C307.745 542.092 291.09 559 270.437 559H57C36.5655 559 20 542.435 20 522V88Z"
                  fill="#FD853A"
                />
              </mask>
              <g mask="url(#mask0_26_297)">
                <path
                  d="M20 88C20 67.5655 36.5655 51 57 51H399C419.435 51 436 67.5655 436 88V389.5C436 409.935 419.435 426.5 399 426.5H376.049C337.534 426.5 306.476 458.031 307.057 496.541L307.433 521.442C307.745 542.092 291.09 559 270.437 559H57C36.5655 559 20 542.435 20 522V88Z"
                  fill="#FD853A"
                />
                <rect
                  opacity="0.5"
                  x="64"
                  y="184"
                  width="328"
                  height="329"
                  rx="35"
                  fill="#757575"
                />
                <rect
                  x="41"
                  y="203"
                  width="374"
                  height="329"
                  rx="35"
                  fill="#9E9D9D"
                />
                <rect
                  x="20"
                  y="222"
                  width="416"
                  height="337"
                  rx="35"
                  fill="url(#pattern0_26_297)"
                />
                <line
                  opacity="0.2"
                  x1="20"
                  y1="159"
                  x2="436"
                  y2="159"
                  stroke="#FCFCFD"
                  strokeWidth="2"
                />
              </g>
              <rect
                x="322"
                y="559"
                width="114"
                height="114"
                rx="57"
                transform="rotate(-90 322 559)"
                fill="#FD853A"
              />
              <path
                d="M364 517L394 487"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M364 487H394V517"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_26_297"
                x="-35"
                y="0"
                width="526"
                height="618"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="27.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_26_297"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_26_297"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0_26_297"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_26_297"
                  transform="matrix(0.00191512 0 0 0.00236407 -0.0400641 0)"
                />
              </pattern>
              <image
                id="image0_26_297"
                width="564"
                height="423"
                xlinkHref="https://s3-alpha-sig.figma.com/img/508b/1c6f/3cdaf2a5a0ec054eea65e8d507512dda?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOF1owEo78TvNINemgiDkxiSE4R20iAoMeNK-8g12Yg~VMfuAgGyPBKnCY7sVGwRc2AbuRIIuAkljCxVu~6j1FzSAHcd31kRJ2D8YRcvXrEibjMBFQo-YH5UQxo-CemvVKf7TVJlFW95QPlR2J~qeTJ5tbIGYG8wEQ-3N0bWM0SOTZqEmsZHUdRWbr2MYtpl7OVP2KP1~1x3D8HUCwawMReQgbATCObXMSecsPrSxImKPCkf26LneNKFLQtP3vVJ8DHfv7Hm-pvKAZbWzQ3UkCTdg7uJTbxQgVwZNw9Y1kUiKcdCaJE5J7brMc2YppMKpHZi0G~jIxoTjDz4Tldyog__"
              />
            </defs>
          </svg>
        </div>
      ) : (
        // Default (unhovered) state
        <div className="relative">
        <svg
      width="416"
      height="508"
      viewBox="0 0 416 508"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="416"
        height="508"
        style={{ maskType: "alpha" }}
      >
        <path
          d="M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V338.5C416 358.935 399.435 375.5 379 375.5H356.049C317.534 375.5 286.476 407.031 287.057 445.541L287.433 470.442C287.745 491.092 271.09 508 250.437 508H37C16.5655 508 0 491.435 0 471V37Z"
          fill="#3C3C3C"
        />
      </mask>
      <g mask="url(#mask0)">
        <g filter="url(#filter0_b)">
          <path
            d="M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V338.5C416 358.935 399.435 375.5 379 375.5H356.049C317.534 375.5 286.476 407.031 287.057 445.541L287.433 470.442C287.745 491.092 271.09 508 250.437 508H37C16.5655 508 0 491.435 0 471V37Z"
            fill="#686868"
            fillOpacity="0.2"
          />
          <path
            d="M1 37C1 17.1178 17.1177 1 37 1H379C398.882 1 415 17.1177 415 37V338.5C415 358.382 398.882 374.5 379 374.5H356.049C316.976 374.5 285.468 406.488 286.057 445.556L286.433 470.457C286.736 490.549 270.532 507 250.437 507H37C17.1177 507 1 490.882 1 471V37Z"
            stroke="url(#paint0_radial)"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </g>
        <rect opacity="0.5" x="44" y="158" width="328" height="329" rx="35" fill="#757575" />
        <rect x="21" y="180" width="374" height="329" rx="35" fill="#9E9D9D" />
        <rect y="202" width="416" height="307" rx="35" fill="url(#pattern0)" />
        <line y1="108" x2="416" y2="108" stroke="#F9FAFB" strokeOpacity="0.3" strokeWidth="2" />
      </g>
      <rect
        x="302"
        y="508"
        width="114"
        height="114"
        rx="57"
        transform="rotate(-90 302 508)"
        fill="#1D2939"
      />
      <path d="M344 466L374 436" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M344 436H374V466" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <filter id="filter0_b" x="-15" y="-15" width="446" height="538" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
        </filter>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="matrix(0.00177305 0 0 0.00240257 0 -0.00814332)" />
        </pattern>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(208 254) rotate(-90) scale(254 363.68)"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
        <image
          id="image0"
          width="564"
          height="423"
          xlinkHref="https://s3-alpha-sig.figma.com/img/508b/1c6f/3cdaf2a5a0ec054eea65e8d507512dda?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOF1owEo78TvNINemgiDkxiSE4R20iAoMeNK-8g12Yg~VMfuAgGyPBKnCY7sVGwRc2AbuRIIuAkljCxVu~6j1FzSAHcd31kRJ2D8YRcvXrEibjMBFQo-YH5UQxo-CemvVKf7TVJlFW95QPlR2J~qeTJ5tbIGYG8wEQ-3N0bWM0SOTZqEmsZHUdRWbr2MYtpl7OVP2KP1~1x3D8HUCwawMReQgbATCObXMSecsPrSxImKPCkf26LneNKFLQtP3vVJ8DHfv7Hm-pvKAZbWzQ3UkCTdg7uJTbxQgVwZNw9Y1kUiKcdCaJE5J7brMc2YppMKpHZi0G~jIxoTjDz4Tldyog__"
        />
      </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default UiUxProjectCard;
