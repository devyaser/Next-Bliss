// DropdownButton.tsx
'use client';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';

interface DropdownButtonProps {
  heading: string;
  headingColor: string;
  items: { text: string; url: string }[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ heading, headingColor, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative group text-sm font-Lato h-[90%] w-[98%] min-w-[120px] lg:min-w-[160px] p-[3px]`}
      style={{
        border: `4px solid ${headingColor}`,
        boxShadow: `5px 5px ${headingColor}`
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative flex items-center whitespace-nowrap justify-around text-white">
          {heading}
          <span>
          <RiArrowDropDownLine className="w-10 h-10 ml-1" />
          </span>
      </div>

      <div
        className={`options-wrapper ${open ? 'dropdown-open' : 'dropdown-close'} mt-2 py-2  rounded-lg shadow-lg`}
        style={{ backgroundColor: headingColor }}
      >
        {items.map((item, itemIndex) => (
          <Link
            key={itemIndex}
            href={item.url}
            className="block text-sm font-Lato px-5 py-4 whitespace-nowrap text-black hover:font-bold border-t hover:transition-all duration-300 border-black"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;
