import React from "react";
import { Typography } from "@/components/typography/Typography";
import LandingBannerData from "@/mocks/LandingPage/Banner";
import CustomButton from "@/components/button/Button";
import Image from "next/image";

const LandingBanner = () => {
  return (
    <div className="flex pt-12 px-6 lg:justify-around LandingBanner-container">
      <div className="text-white-light flex gap-[50px] flex-col p-10 flex-3 max-w-full md:max-w-[65%]">
        <Typography variant="h2" as="div">
          {LandingBannerData.heading}
        </Typography>
        <Typography variant="body" as="div" className="font-Lato">
          {LandingBannerData.text}
        </Typography>
        <div >
          <CustomButton
            boxShadowColor="blue"
            buttonText={LandingBannerData.buttontext}
          />
        </div>
      </div>

      <Image
        className="pt-8 hidden lg:flex"
        src={LandingBannerData.frontimage}
        width={307}
        height={400}
        alt="Phone"
        />
    </div>
  );
};

export default LandingBanner;
