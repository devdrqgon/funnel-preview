import { FC } from "react";

interface Props {
  block: BlockList;
}
const BlockList: FC<Props> = ({ block }) => {
  return (
    <div className="flex flex-col">
      {block.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default BlockList;
