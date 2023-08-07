import { FC, useEffect } from "react";

interface Props {
  block: BlockButton;
}
const BlockButton: FC<Props> = ({ block }) => {
  useEffect(() => {
    console.info("block", block.bgColor);
  }, [block]);

  return (
    <button
      style={{
        backgroundColor: block?.bgColor || "#0076ff", //not sure  why but tailwind is having problems applying a dynamic background color, so to win time Iam using inline styles. in real life situation, I would investigate further.
      }}
      className="bg-[#007aff] text-l font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]  hover:transition-colors"
    >
      {block.text}
    </button>
  );
};

export default BlockButton;
