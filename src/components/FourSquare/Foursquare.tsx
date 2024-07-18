import Square from "../square/Square";

interface Box {
  text: string;
  bgColor: string;
  width: string;
  height: string;
  rotateText: boolean;
  textColor: string;
  buttonText: string; // Text for the button
  buttonLink: string;
}

interface FourSquareProps {
  boxes: Box[];
}

const FourSquare: React.FC<FourSquareProps> = ({ boxes }) => (
  <div className="flex gap-16 items-center ">
    {boxes.map((box, index) => (
      <div key={index} className={`flex box-${index}`}>
        <Square
          text={box.text}
          bgColor={box.bgColor}
          width={box.width}
          height={box.height}
          rotateText={box.rotateText}
          textColor={box.textColor}
          isFirstBox={index === 0}
          buttonText={box.buttonText}
          buttonLink={box.buttonLink}
        />
      </div>
    ))}
  </div>
);

export default FourSquare;
