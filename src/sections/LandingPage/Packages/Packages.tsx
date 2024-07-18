import FourSquare from "@/components/FourSquare/Foursquare";
import React from "react";
import packageData from "@/mocks/LandingPage/Packages";

const Packages = () => {
  return (
    <div className="py-16 border-t border-b border-white LandingBanner-container">
    <div className="flex p-[15px] py-16 ml-10 items-center justify-normal xl:justify-around overflow-auto">
      <FourSquare boxes={packageData} />
    </div>
    </div>
  );
};

export default Packages;
