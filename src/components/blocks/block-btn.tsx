import { FC } from "react";
import Button from "../common/button";

interface Props {
  block: BlockButton;
}
const BlockButton: FC<Props> = ({ block }) => {
  return <Button text={block.text} bgColor={block.bgColor} />;
};

export default BlockButton;
