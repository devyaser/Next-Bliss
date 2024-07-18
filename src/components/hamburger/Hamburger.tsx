"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navbarData from "@/mocks/navbar";
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from "next/link";

const DrawerHamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (index: number) => {
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <button className="ml-auto text-white" onClick={toggleMenu}>
        <GiHamburgerMenu className="w-6 h-6" />
      </button>
      {menuOpen && (
        <div className="absolute top-[47px] right-[-32px] w-[40%] min-w-[210px] bg-black-light border shadow-md">
          {navbarData.map((item, index) => (
            <div
              key={index}
              className="border-t border-white-light"
              onClick={() => toggleSubmenu(index)}
            >
              <div style={{color:`${item.rgbacolor}`}} className="flex text-navtext font-Lato font-semibold px-4 py-2 justify-between items-center">
              {item.label}
              <RiArrowDropDownLine className={`w-10 h-10 transform ${activeItemIndex === index ? 'rotate-180 transition-transform duration-300 ease-in-out' : ''}`} />
      
              </div>
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
      )}
    </div>
  );
};

export default DrawerHamburger;
