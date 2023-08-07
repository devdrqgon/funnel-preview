import { FC } from "react";

interface Props {
  block: BlockText;
}
const BlockText: FC<Props> = ({ block }) => {
  return (
    <div
      className={`text-2xl bg-[${block?.color || "black"}] self-${
        block?.align || "center"
      } font-semibold `}
    >
      {block.text}
    </div>
  );
};

export default BlockText;
