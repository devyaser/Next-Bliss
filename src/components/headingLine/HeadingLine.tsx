import React from "react";
import { Typography } from "../typography/Typography";

interface HeadingWithLineProps {
  text: string;
  textColor: string;
}

const HeadingWithLine: React.FC<HeadingWithLineProps> = ({
  text,
  textColor,
}) => {
  const containerStyle = {
    color: textColor,
  };
  const lineStyle = {
    backgroundColor: textColor,
  };

  return (
    <div className="flex items-end gap-[-3]" style={containerStyle}>
      <Typography variant="h3" as='div' >{text}</Typography>
      <div className="h-[4px]  bg-white mb-[14px] w-0 sm:w-[100%]" style={lineStyle}/>
    </div>
  );
};

export default HeadingWithLine;
