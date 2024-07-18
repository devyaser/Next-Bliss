import React from "react";
import TrustedData from "@/mocks/LandingPage/Trustedby";
import { Typography } from "@/components/typography/Typography";
import Image from "next/image";
import HeadingWithLine from "@/components/headingLine/HeadingLine";

const Trusted = () => {
  return (
    <div className="py-12 px-8 md:px-16 flex flex-col gap-10 md:gap-20 mx-6">
      <div className="flex flex-col justify-between items-center gap-4 lg:flex-row ">
        <Typography variant="h4" className="text-white font-Lato whitespace-nowrap">{TrustedData.text1}</Typography>
        <div className="w-[300px] lg:w-[650px] mx-3">
        <Image
          src={TrustedData.image}
          alt="company"
          width={600}
          />
          </div>
      </div>
      <div>
        <HeadingWithLine text={TrustedData.heading} textColor="red"/>
      </div>
        <Typography variant="body" as="div" className="font-Lato text-white-light flex w-[100%] md:w-[60%] m-auto">{TrustedData.text2}</Typography>
    </div>
  );
};

export default Trusted;
