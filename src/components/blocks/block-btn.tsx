import { FC } from "react";

interface Props {
  block: BlockButton;
}
const BlockButton: FC<Props> = ({ block }) => {
  return (
    <button
      className={`rounded-full  px-6 pb-2 pt-2.5  text-lg font-medium  text-white 
      shadow-[0_4px_9px_-4px_#3b71ca]
       bg-[${block.bgColor}]`}
    >
      {block.text}
    </button>
  );
};

export default BlockButton;
