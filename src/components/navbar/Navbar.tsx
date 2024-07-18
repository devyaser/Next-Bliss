import Image from "next/image";
import Logo from "../../../public/leafelogo.png";
import React from "react";
import Link from "next/link";
import headerData from "../../mocks/header"; // Import your mock data
import DrawerHamburger from "../hamburger/Hamburger";
import navbarData from "../../mocks/navbar";
import DropdownButton from "../dropDown/Dropdown";

const Navbar = () => {
  return (
    <nav className="bg-black-light pt-3 pb-4">
      <div className="px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-start">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="mr-10"
                width={80}
                height={20}
              />
            </Link>
            <div className="flex items-center  text-white-light font-Lato text-basetext space-x-1 justify-between gap-4">
              <div className="gap-1 hidden xl:flex">
                {headerData.recordsTaken.map((record, index) => (
                  <span
                    key={index}
                    className="border bg-black w-[34px] h-[34px] flex justify-center"
                  >
                    {record}
                  </span>
                ))}
              </div>
              <span className="text-white-light text-basetext hidden xl:flex">
                {headerData.text}
              </span>
            </div>
          </div>
          <div className="md:hidden relative z-10 cursor-pointer">
            <DrawerHamburger />
          </div>
          <div className="hidden md:block cursor-pointer">
            <div className="flex flex-row gap-4">
              {navbarData.map((menuItem, index) => (
                <DropdownButton
                  key={index}
                  heading={menuItem.label}
                  headingColor={menuItem.rgbacolor}
                  items={menuItem.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
