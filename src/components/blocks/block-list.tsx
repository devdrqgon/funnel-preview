import { FC } from "react";

interface Props {
  block: BlockList;
}
const BlockList: FC<Props> = ({ block }) => {
  return (
    <div className="flex flex-col gap-5">
      {block.items.map((item) => (
        <div
          className={`p-3 min-w-full flex gap-4  rounded-lg shadow-md border  border-black  border-opacity-10`}
        >
          <img
            className="object-cover"
            width={"80px"}
            src={item?.src}
            alt="image"
          />
          <div className="flex flex-col gap-2 my-1">
            <h1 className=" text-base font-bold">{item.title}</h1>
            <p className=" font-medium">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockList;
