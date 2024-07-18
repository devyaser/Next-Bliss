import React from "react";
import HeadingWithLine from "@/components/headingLine/HeadingLine";
import BenefitsData from "@/mocks/LandingPage/KeyBenefits";
import { Typography } from "@/components/typography/Typography";
import Image from "next/image";
import CustomButton from "@/components/button/Button";

const KeyBenefits = () => {
  return (
    <div className="p-16">
    <div className="flex  flex-col">
      <div>
        <HeadingWithLine text={BenefitsData.heading1} textColor="#00B873" />
      </div>
      <div className="flex justify-between m-10">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div>
            <Typography
              variant="body"
              as="div"
              className="font-Lato text-white-light"
            >
              {BenefitsData.Text1}
            </Typography>
          </div>
          <div>
            <CustomButton
              boxShadowColor="#00B873"
              buttonText={BenefitsData.Btntext}
            />
          </div>
        </div>
        <div className="hidden lg:flex w-[100%] h-[100%] justify-center">
          <Image
            src={BenefitsData.pic1}
            width={336}
            height={273}
            alt="Picture"
            />
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div>
        <HeadingWithLine text={BenefitsData.heading2} textColor="#FFB700" />
      </div>
      <div className="flex justify-between m-10">
        <div className="flex flex-col gap-20">
          <div>
            <Typography
              variant="body"
              as="div"
              className="font-Lato text-white-light"
            >
              {BenefitsData.Text2}
            </Typography>
          </div>
          <div>
            <CustomButton
              boxShadowColor="#FFB700"
              buttonText={BenefitsData.Btntext}
            />
          </div>
        </div>
        <div className="hidden lg:flex w-[100%] h-[100%] justify-center">
          <Image
            src={BenefitsData.pic1}
            width={336}
            height={273}
            alt="Picture"
            />
        </div>
      </div>
    </div>
    </div>
  );
};

export default KeyBenefits;
