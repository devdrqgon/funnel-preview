import { FC, useState } from "react";

interface BgColor {
  mainColor: string;
  colorOnHover?: string;
}
interface Props {
  onClick?: () => void;
  text: string;
  size?: "text-xs" | "text-xl";
  bgColor?: BgColor;
  textColor?: "black" | "white";
}
const Button: FC<Props> = ({ onClick, text, size, bgColor, textColor }) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      // className="bg-[#007aff] text-xl font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]"
      style={{
        background:
          isHovered && bgColor.colorOnHover
            ? bgColor.colorOnHover
            : bgColor?.mainColor || "#007aff",
        color: textColor || "white",
      }}
      className={` ${size || "text-xl"}
       font-semibold  font-inter shadow-sm   rounded-xl text-white py-4 px-3 text-center`}
    >
      {text}
    </button>
  );
};

export default Button;
