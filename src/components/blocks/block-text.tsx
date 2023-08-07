import { FC } from "react";

interface Props {
  block: BlockText;
}
const BlockText: FC<Props> = ({ block }) => {
  return <div style={{ color: block?.color || "black" }}>{block.text}</div>;
};

export default BlockText;
