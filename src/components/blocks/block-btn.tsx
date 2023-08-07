import { FC } from "react";

interface Props {
  block: BlockButton;
}
const BlockButton: FC<Props> = ({ block }) => {
  return <button style={{ background: block?.bgColor }}>{block.text}</button>;
};

export default BlockButton;
