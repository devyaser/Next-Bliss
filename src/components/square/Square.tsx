import Link from "next/link";
import { Typography } from "../typography/Typography";

interface SquareProps {
  text: string;
  bgColor: string;
  width: string;
  height: string;
  rotateText: boolean;
  textColor: string;
  isFirstBox: boolean;
  buttonText?: string; // Text for the button
  buttonLink?: string;
}

const Square: React.FC<SquareProps> = ({
  text,
  bgColor,
  width,
  height,
  rotateText,
  textColor,
  isFirstBox,
  buttonText,
  buttonLink,
}) => (
  <div
    style={{
      width: width,
      height: height,
      backgroundColor: bgColor,
      display: "flex",
      alignItems: isFirstBox ? "flex-start" : "center", // Align text to the top left only for the first box
      justifyContent: isFirstBox ? "flex-start" : "center",
      outline: `2px solid ${bgColor}`,
      outlineOffset: "4px",
      color: textColor,
      padding: isFirstBox ? "30px" : "0px",
      position: "relative",
    }}
  >
    <Typography
      variant="h3"
      className={`transform ${rotateText ? "-rotate-90" : "none"} ${
        isFirstBox ? "w-[70%]" : "none"
      }`}
    >
      {text}
    </Typography>
    {isFirstBox && (
      <div className="absolute bottom-[30px] right-[60px]">
        <Link href={`${buttonLink}`}>
          <Typography variant="body-small" className="font-bold underline">
            {buttonText}
          </Typography>
        </Link>
      </div>
    )}
  </div>
);

export default Square;
