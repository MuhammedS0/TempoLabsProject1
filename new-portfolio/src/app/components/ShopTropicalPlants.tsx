import React from "react";

const ShopTropicalPlants: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="
          h-[100px] 
          px-[59px] 
          py-[33px] 
          rounded-[32px] 
          border border-[#151515] 
          flex 
          justify-center 
          items-center 
          gap-2.5 
          transition-all 
          duration-300 
          hover:bg-[#151515]
        "
      >
        <div
          className="
            text-[#151515] 
            text-[25.69px] 
            font-semibold 
            font-[Lufga] 
            transition-all 
            duration-300 
            hover:text-white
          "
        >
          Shop Tropical Plants
        </div>
      </div>
    </div>
  );
};

export default ShopTropicalPlants;
