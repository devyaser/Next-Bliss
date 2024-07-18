"use client";
import React, { useState } from "react";
import footerData from "../../mocks/footer";
import navbarData from "@/mocks/navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "../typography/Typography";

const Footer = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };
  return (
    <div>
      <div className="relative">
        <hr className="text-white-light mt-[75px] border-t-4 relative " />
        <div className="absolute border-4 font-Lato text-white border-white-light p-4 top-[-67px] right-[105px]"> 
            <Typography variant="body" className="flex gap-2 items-center">
            {footerData.boxtext} {footerData.icon}
            </Typography>
        </div>
      </div>
      <div className="flex text-white bg-altblack border-t-[30px] border-white-light m-10 ">
        <div className="flex mx-12 my-5 w-[100%] flex-col">
          <div className="flex justify-between w-[100%] flex-col lg:flex-row ">
            <div className="flex flex-col">
              <Typography variant="h4" className="font-Oswald font-bold text-white-light mb-3">
                {footerData.title}
              </Typography>
              {footerData.info.map((person, index) => (
                <Typography
                  variant="body-small"
                  as="div"
                  key={index}
                  className="font-Oswald font-normal text-white-light mt-6"
                >
                  {person.name} | {person.email} | {person.number}
                </Typography>
              ))}
              <Typography variant="body-small" className="font-Oswald font-normal text-white-light mt-6">
                {footerData.address}
              </Typography>
            </div>
            <div className="flex flex-col font-Oswald font-bold text-white-light">
              <div className="lg:mt-0 mt-12">
                {navbarData.map((item, index) => (
                  <div key={index} onClick={() => toggleSubmenu(index)}>
                    <Typography variant="h5" as="div" className="flex px-4 py-2 justify-between items-center cursor-pointer">
                      {item.label}
                      <RiArrowDropDownLine
                        className={`w-[60px] h-[60px] transform ${
                          activeItemIndex === index
                            ? "rotate-180 transition-transform duration-300 ease-in-out"
                            : ""
                        }`}
                      />
                    </Typography>
                    {activeItemIndex === index && item.items && (
                      <div>
                        {item.items.map((nestedItem, nestedIndex) => (
                          <Link
                            key={nestedIndex}
                            href={nestedItem.url}
                            className="flex text-sm px-6 py-3 font-normal text-white hover:text-slate-300 hover:bg-zinc-900 "
                          >
                            {nestedItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footerdiv items-center justify-between mt-10 text-white-light grid grid-cols-6 gap-4">
            <Typography variant="body-small" as="div" className="left flex flex-col number1 col-span-6 lg:col-span-2 items-center justify-center gap-4 lg:gap-0 order-last lg:order-first">
              <div className="flex gap-4">
                {footerData.socialmedia.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <div className="mt-0 lg:mt-5 whitespace-nowrap">
                {footerData.reserved}
              </div>
            </Typography>

            <div className="number2 col-span-6 md:col-span-3 lg:col-span-2 flex  ml-[-25px] items-center justify-center gap-4 lg:gap-8">
              <div className="w-[139px] h-[42px]">
              <Image
                src={footerData.playstore}
                alt="Playstore"
                />
                </div>
                <div className="w-[139px] h-[42px]">
              <Image
                src={footerData.appstore} 
                alt="apptore"
                />
                </div>
            </div>
            <Typography variant="body-small" as="div" className="number3 col-span-6 md:col-span-3 lg:col-span-2 flex whitespace-nowrap items-center justify-center gap-4">
              <span>{footerData.text1}</span>
              <span>{footerData.text2}</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
