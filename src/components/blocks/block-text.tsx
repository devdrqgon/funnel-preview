import { FC } from "react";

interface Props {
  block: BlockText;
}
const BlockText: FC<Props> = ({ block }) => {
  return (
    <div
      style={{
        color: block?.color || "black",
        alignSelf: block?.align || "center",
      }}
      className={`text-2xl self-center font-semibold `}
    >
      {block.text}
    </div>
  );
};

export default BlockText;
