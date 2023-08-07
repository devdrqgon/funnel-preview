import { FC } from "react";

interface Props {
  block: BlockImg;
}
const BlockImg: FC<Props> = ({ block }) => {
  return (
    <div>
      <img src={block?.src} alt="blockImg" />
    </div>
  );
};

export default BlockImg;
