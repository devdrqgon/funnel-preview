import { FC } from "react";

interface Props {
  block: BlockImg;
}
const BlockImg: FC<Props> = ({ block }) => {
  return (
    <img
      className="rounded-2xl object-fit sm:w-6/12"
      src={block?.src}
      alt="blockImg"
    />
  );
};

export default BlockImg;
