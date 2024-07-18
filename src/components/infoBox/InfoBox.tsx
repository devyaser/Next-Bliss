import React from "react";
import { Typography } from "../typography/Typography";

const InfoBox: React.FC<InfoBoxProps> = ({
  boxShadowColor,
  Text,
  Text2,
  boxShadow = `10px 10px ${boxShadowColor}`,
  backgroundColor = "#F4E9D5",
  border = "1px solid black", // Default border if not provided
}) => {
  const InfoBox: React.CSSProperties = {
    backgroundColor,
    border,
    padding: "30px",
    borderRadius: "3px",
    boxShadow,
  };

  return (
    <div className="relative" style={InfoBox}>
      <Typography
        variant="body-small"
        className="font-Lato text-white-light w-[85%]"
      >
        {Text}
      </Typography>
      <div
        className="infoboxtag absolute p-3 border border-black"
        style={{
          backgroundColor: `${boxShadowColor}`,
          right: "-45px",
          bottom: "58px",
          clipPath:
            "polygon(0% 50%, 35% 0%, 100% 0%, 100% 100%, 35% 100%, 0% 50%)",
        }}
      >
        <div className="flex items-center gap-2">

        <span className="h-[15px] w-[15px] inline-block bg-black rounded-[50%]"></span>
        <Typography variant="body-small" className="font-Lato text-white-light">
          {Text2}
        </Typography>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
