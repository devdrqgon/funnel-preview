import React, { FC } from "react";
import BlocksRenderer from "./blocks-renderer";

interface Props {
  page: Page;
}

const Page: FC<Props> = ({ page }) => {
  return (
    <div className=" flex flex-col  items-center gap-8">
      {page.blocks.map((b, i) => (
        <BlocksRenderer key={i} block={b} />
      ))}
    </div>
  );
};

export default Page;
