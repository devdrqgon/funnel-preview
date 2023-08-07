import { FC } from "react";
import BlockText from "./blocks/block-text";
import BlockImg from "./blocks/block-img";
import BlockList from "./blocks/block-list";
import BlockButton from "./blocks/block-btn";

interface Props {
  block: BlockText | BlockImg | BlockButton | BlockList;
}
const BlocksRenderer: FC<Props> = ({ block }) => {
  if (block.type === "text") return <BlockText block={block as BlockText} />;
  if (block.type === "image") return <BlockImg block={block as BlockImg} />;
  if (block.type === "list") return <BlockList block={block as BlockList} />;
  if (block.type === "button")
    return <BlockButton block={block as BlockButton} />;
  else return <div>error unknown block type {block?.type}</div>;
};

export default BlocksRenderer;
