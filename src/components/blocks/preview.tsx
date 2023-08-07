import { FC, useEffect } from "react";
import Page from "../page";

interface Props {
  funnel?: Funnel;
}
const Preview: FC<Props> = ({ funnel }) => {
  //Set Body BackgroundColor based on the funnel backgroundColor
  useEffect(() => {
    document.body.style.backgroundColor = funnel?.bgColor || "#FFF";
  }, [funnel?.bgColor]);

  if (!funnel) return <></>;
  return (
    <div>
      <div className="px-2 text-base font-normal gradient py-4 flex w-full justify-center bg-[#53D3F4] text-center font-inter">
        <span className=" mx-2 font-inter font-semibold">
          Previewing {funnel?.name}.
        </span>
        <div>
          Want to try a different one? Then click
          <span
            className="ml-1 text-blood-orange cursor-pointer underline"
            onClick={() => {
              alert("soon");
            }}
          >
            here
          </span>
          .
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 h-full p-4">
        <>
          {funnel?.pages.map((p, i) => (
            <Page key={i} p={p as Page} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Preview;
