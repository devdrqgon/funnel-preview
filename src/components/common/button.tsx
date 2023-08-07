import { FC } from "react";

interface Props {
  onClick?: () => void;
  text: string;
  size?: "text-xs" | "text-xl";
  bgColor?: string;
}
const Button: FC<Props> = ({ onClick, text, size, bgColor }) => {
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      // className="bg-[#007aff] text-xl font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]"
      style={{ background: bgColor || "#133DF6" }}
      className={` ${size || "text-xl"}

       font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-3 text-center hover:bg-[#133DF6] `}
    >
      {text}
    </button>
  );
};

export default Button;

// <button
//   style={{
//     backgroundColor: block?.bgColor || "#0076ff", //not sure  why but tailwind is having problems applying a dynamic background color, so to win time Iam using inline styles. in real life situation, I would investigate further.
//   }}
//   className="bg-[#007aff] text-l font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]"
// >
//   {block.text}
// </button>;
