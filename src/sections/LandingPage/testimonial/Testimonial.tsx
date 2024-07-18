"use client";
import React from "react";
import { Typography } from "@/components/typography/Typography";
import Slider from "@/components/Slider/Slider";
import TESTIMONIALDATA from "@/mocks/LandingPage/Testimonial";
import { SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="p-16 border-b border-white ">
      <div className="shadow-[-10px_10px_#D02D16] border-4 border-[#D02D16]">
        <div className="text-white bg-red p-4 flex items-center justify-center">
          <Typography variant="h4">{TESTIMONIALDATA.heading}</Typography>
        </div>
        <Slider childClassName="my-swiper w-[100%]">
          {TESTIMONIALDATA.details.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="py-8 px-0 sm:px-16 sm:py-16 m-10 sm:m-14">
                <Typography variant="body-small" as="div" className="text-white-light">
                  {testimonial.review}
                </Typography>
                <Typography variant="body-small" as="div" className="text-red my-6 sm:my-12">
                  - {testimonial.author}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
