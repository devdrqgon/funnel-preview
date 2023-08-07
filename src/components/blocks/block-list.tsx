import { FC } from "react";

interface Props {
  block: BlockList;
}
const BlockList: FC<Props> = ({ block }) => {
  return (
    <div className="flex flex-col gap-5">
      {block.items.map((item, i) => (
        <div
          key={i}
          className={`border-2 border-dotted border-[#2f4a54]  min-w-full pr-5 pt-2 flex gap-4  rounded-lg shadow-md  `}
        >
          <img
            className="object-cover bg-white m-2 rounded-md"
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
