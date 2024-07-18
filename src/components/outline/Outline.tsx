import React, { ReactNode } from "react";

interface OutlineBoxProps {
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
}

const OutlineBox: React.FC<OutlineBoxProps> = ({
  children,
  color,
  backgroundColor,
}) => {
  const boxStyle = {
    color: color, 
    backgroundColor: backgroundColor,
  };

  return (
    <div className="relative inline-block " style={boxStyle}>
      <div 
        className="p-3 px-4 before:absolute before:w-full before:h-full before:border-2 before:border-white-light before:right-[14px] before:top-[14px] before:-z-10 w-full h-full border border-white-light"
      >
        {children}
      </div>
    </div>
  );
};

export default OutlineBox;
