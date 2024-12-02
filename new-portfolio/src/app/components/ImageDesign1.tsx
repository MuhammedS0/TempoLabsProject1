import React from "react";

const ImageDesign1: React.FC = () => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/1b56/33d8/c33f2ece91ab6f55e11cdcd6c4f9c261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CwhJVfTkxKTq1bIfwVfqsTbHnPnefd4OPncg-mIxRBYObDhBuaCPn2Hhv0YoYgI5YRSMELffAjMolEuHrQk7otOHNKVDb0G5RbiIByL9d3i3wwcVdtjylyWxv~nACq0~Xi9Mz-JKbE9opxdbIdpbTHcjT34WqX7XU-1Np03ENeMX1F17-BcyC1fuSEHIGZxEZImQf1EVYiW47UNRF3MKx1RtvOVyjwAyLTkLuvdh5BV5jaYAlZIiSca5YxbyBafyI7bxiOz76NL9j52CuxkrXMvzENbwh6l2Lu3dUjuPpBFkCQxzdCIhctpZ-gwh4upUMZcjkfja2v2DCemDdQVBPg__";

  return (
    <div className="relative w-[603px] h-[600px] group">
      {/* Hover background with layered circular borders */}
      <div className="absolute w-full h-full">
        <div className="w-[624px] h-[624px] left-[-20px] top-[-80px] absolute rounded-full border border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-[590px] h-[590px] left-[-3px] top-[-63px] absolute rounded-full border-2 border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-[552px] h-[552px] left-[16px] top-[-44px] absolute rounded-full border-2 border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-[506px] h-[506px] left-[39px] top-[-21px] absolute rounded-full border-4 border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-[460px] h-[460px] left-[62px] top-[2px] absolute rounded-full border-4 border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-[410px] h-[410px] left-[87px] top-[27px] absolute rounded-full border-4 border-[#fd8439] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Standalone image */}
      <img
        src={imageUrl}
        alt="Design"
        className="w-[603px] h-[600px] relative z-10"
      />
    </div>
  );
};

export default ImageDesign1;
