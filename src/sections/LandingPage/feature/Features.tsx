import React from "react";
import FeaturesData from "@/mocks/LandingPage/Features";
import { Typography } from "@/components/typography/Typography";
import InfoBox from "@/components/infoBox/InfoBox";

const Features = () => {
  return (
    <div className="flex py-16 px-6 flex-col LandingBanner-container border border-t-white border-b-white">
      <div className="flex justify-center">
        <div className="relative inline-block bg-white-light">
          <div className="p-3 px-4 before:absolute before:w-full before:h-full before:border-2 before:border-white-light before:right-[14px] before:top-[14px] before:-z-10 w-full h-full border border-white-light">
            <Typography variant="h4">{FeaturesData.heading}</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 mx-8 my-20 lg:flex-row">
        <div>
          <InfoBox
            boxShadowColor="#00B873"
            backgroundColor="#141313"
            border="2px solid #00B873"
            Text={FeaturesData.text1}
            Text2={FeaturesData.tag1}
          />
        </div>
        <div>
          <InfoBox
            boxShadowColor="#2F4ED8"
            backgroundColor="#141313"
            border="2px solid #2F4ED8"
            Text={FeaturesData.text2}
            Text2={FeaturesData.tag2}
          />
        </div>
        <div >
          <InfoBox
            boxShadowColor="#FFB700"
            backgroundColor="#141313"
            border="2px solid #FFB700"
            Text={FeaturesData.text3}
            Text2={FeaturesData.tag3}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
