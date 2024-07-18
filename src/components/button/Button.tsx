import React from "react";
import { Typography } from "../typography/Typography";

const CustomButton: React.FC<CustomButtonProps> = ({
  boxShadowColor,
  buttonText,
  boxShadow = `-10px 10px ${boxShadowColor}`,
  onClick,
  backgroundColor = "#F4E9D5",
  border = "1px solid black", // Default border if not provided
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color: "black",
    border,
    padding: "10px 25px",
    borderRadius: "3px",
    cursor: "pointer",
    boxShadow,
    fontFamily: "Oswald",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <Typography variant="h5">
      {buttonText}
      </Typography>
    </button>
  );
};

export default CustomButton;
