import React, { FC } from "react";
import BlocksRenderer from "./blocks/blocks-renderer";

interface Props {
  p: Page;
}

const Page: FC<Props> = ({ p }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      {p.blocks.map((b) => (
        <BlocksRenderer block={b} />
      ))}
    </div>
  );
};

export default Page;
