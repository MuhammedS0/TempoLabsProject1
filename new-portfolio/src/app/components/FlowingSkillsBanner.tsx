import React from "react";

const FlowingSkillsBanner: React.FC = () => {
  const skills = [
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
  ];

  return (
    <div className="w-[1440px] h-[147px] bg-[#fb6413] rounded-tl-3xl rounded-br-3xl relative overflow-hidden flex items-center justify-center">
      {/* White Inner Container */}
      <div className="w-[1470px] h-[90px] bg-white rounded-tl-3xl rounded-br-3xl rotate-[-2.5deg] flex items-center overflow-hidden">
        <div className="flex items-center gap-[15px] animate-marquee whitespace-nowrap">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <div className="text-black text-5xl font-normal font-['Lufga'] px-5">
                {skill}
              </div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3832 0.309984L21.6154 12.3931L34.1086 16.5523L22.0254 21.7845L17.8663 34.2776L12.6341 22.1945L0.140944 18.0353L12.2241 12.8032L16.3832 0.309984Z"
                  fill="#FD853A"
                />
              </svg>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless scrolling */}
          {skills.map((skill, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <div className="text-black text-5xl font-normal font-['Lufga'] px-5">
                {skill}
              </div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3832 0.309984L21.6154 12.3931L34.1086 16.5523L22.0254 21.7845L17.8663 34.2776L12.6341 22.1945L0.140944 18.0353L12.2241 12.8032L16.3832 0.309984Z"
                  fill="#FD853A"
                />
              </svg>
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FlowingSkillsBanner;
