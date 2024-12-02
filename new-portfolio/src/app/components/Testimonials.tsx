import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="h-[264.84px] p-[21px] bg-white/10 rounded-3xl backdrop-blur-[14px] flex-col justify-start items-start gap-3.5 inline-flex relative border border-transparent hover:border-[#979797] transition duration-300 ease-in-out">
      {/* Top Right Quote Icon */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/bold/quote-down">
            <g id="vuesax/bold/quote-down_2">
              <g id="quote-down">
                <path
                  id="Vector"
                  d="M84.8527 65.9732H109.866C109.439 90.8799 104.533 94.9865 89.2261 104.053C87.4661 105.12 86.8794 107.36 87.9461 109.173C89.0127 110.933 91.2528 111.52 93.0661 110.453C111.093 99.7865 117.386 93.2799 117.386 62.2398V33.4932C117.386 24.3732 109.973 17.0132 100.906 17.0132H84.9061C75.5194 17.0132 68.4261 24.1065 68.4261 33.4932V49.4932C68.3727 58.8798 75.4661 65.9732 84.8527 65.9732Z"
                  fill="#667085"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_2"
                  d="M27.146 65.9732H52.1593C51.7327 90.8799 46.826 94.9865 31.5193 104.053C29.7593 105.12 29.1727 107.36 30.2393 109.173C31.306 110.933 33.546 111.52 35.3593 110.453C53.386 99.7865 59.6793 93.2799 59.6793 62.2398V33.4932C59.6793 24.3732 52.266 17.0132 43.1993 17.0132H27.1993C17.7593 17.0132 10.666 24.1065 10.666 33.4932V49.4932C10.666 58.8798 17.7593 65.9732 27.146 65.9732Z"
                  fill="#667085"
                  fillOpacity="0.3"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Header Section */}
      <div className="flex justify-start items-start gap-3">
        {/* Profile Image */}
        <div className="w-[54.84px] h-[54.84px] flex justify-center items-center">
          <img
            className="w-[54.84px] h-[54.84px] rounded-full"
            src="https://s3-alpha-sig.figma.com/img/cea8/66c8/d114d5e5606c6b57545c5948aaa5de79?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OU1-4nB7D79mPZAIJhIlVJbyV2CqKCd3NxPrzC4V8WKph0c-bcqDNSchUtoqdjq3gpO5c7YRg7easjj2~cqOeoi2ArAcouh9CZgTNgKwJLr62LWhSfk0b3oNqkyQrFqWMe5zb78DfrWc2N7~P-3yKcaQv-HpK0MvkSJxp~uM7P6BA-tjMLO4QLuKlkPjGc5IIuCj0nBfeEd0NSSNw72Y6y2-nTK60nnzfYKzj9XbHjIqTBwgjw8HqWy41tdNtipEjoEvXhRH63dyXZWM4uMO5s9ZEtu1ukNVTZ9d2bBY9crrAnVEn6gtgWsTs0IK0bZU6kn32h9DSwCXMZlN0hFBIA__"
            alt="Profile"
          />
        </div>
        {/* Name and Title */}
        <div className="flex-col justify-start items-start">
          <div className="text-[#fbfcfc] text-2xl font-bold font-['Urbanist']">
            Jayesh Patil
          </div>
          <div className="text-[#fbfcfc] text-lg font-normal font-['Urbanist']">
            CEO, Lirante
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <div className="h-[34px] flex justify-start items-center gap-[5px]">
        <div className="flex justify-start items-center gap-[5px]">
          {/* Star SVGs */}
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="w-8 h-8 flex justify-center items-center">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star">
                    <path
                      id="Star_2"
                      d="M21.8912 15.9285C21.5459 16.2631 21.3872 16.7471 21.4659 17.2218L22.6512 23.7818C22.7512 24.3378 22.5165 24.9005 22.0512 25.2218C21.5952 25.5551 20.9885 25.5951 20.4912 25.3285L14.5858 22.2485C14.3805 22.1391 14.1525 22.0805 13.9192 22.0738H13.5578C13.4325 22.0925 13.3099 22.1325 13.1979 22.1938L7.29118 25.2885C6.99918 25.4351 6.66852 25.4871 6.34452 25.4351C5.55518 25.2858 5.02852 24.5338 5.15785 23.7405L6.34452 17.1805C6.42318 16.7018 6.26452 16.2151 5.91918 15.8751L1.10452 11.2085C0.70185 10.8178 0.56185 10.2311 0.74585 9.70179C0.924517 9.17379 1.38052 8.78846 1.93118 8.70179L8.55785 7.74046C9.06185 7.68846 9.50452 7.38179 9.73118 6.92846L12.6512 0.94179C12.7205 0.808457 12.8099 0.68579 12.9179 0.58179L13.0378 0.488457C13.1005 0.419124 13.1725 0.36179 13.2525 0.315124L13.3979 0.26179L13.6245 0.168457H14.1859C14.6872 0.220457 15.1285 0.520457 15.3592 0.968457L18.3179 6.92846C18.5312 7.36446 18.9459 7.66712 19.4245 7.74046L26.0512 8.70179C26.6112 8.78179 27.0792 9.16846 27.2645 9.70179C27.4392 10.2365 27.2885 10.8231 26.8779 11.2085L21.8912 15.9285Z"
                      fill="#FD853A"
                    />
                  </g>
                </svg>
              </div>
            ))}
        </div>
        <div className="text-[#fbfcfc] text-[25.69px] font-medium font-['Lufga']">
          5.0
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="w-[742px] h-[106px] text-[#f8f9fb] text-xl font-normal font-['Lufga']">
        consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
        orci elementum egestas lobortis.Sed lobortis orci elementum egestas
        lobortis.Sed lobortis orci elementum egestas lobortis.
      </div>
    </div>
  );
};

export default Testimonials;
