import { FC, useEffect } from "react";
import Page from "./page";
import PerspectiveLogo from "./../assets/perspective-logo.png";
import Button from "./common/button";
import { useFunnel } from "./hooks/useFunnel";
import UploadButton from "./common/upload-funnel-button";

const Preview: FC = () => {
  const funnel = useFunnel((state) => state.funnel);
  const set_Funnel = useFunnel((state) => state.setFunnel);

  //Set Body BackgroundColor based on the funnel backgroundColor
  useEffect(() => {
    document.body.style.backgroundColor = funnel?.bgColor || "#FFF";
  }, [funnel?.bgColor]);

  return (
    <>
      <div className="z-50 text-white fixed top-0 left-0 w-full py-4 flex flex-col justify-center backdrop-blur border-b border-b-gray-500/40 dark:border-b-white/30 font-medium dark:font-normal bg-gray-800/40">
        <div className="w-full flex flex-row items-center justify-between min-h-[2.5rem] px-8 relative">
          <div className="flex items-center">
            <img
              src={PerspectiveLogo}
              className="object-contain w-14 h-10"
              alt="logo"
            />
            <span className="text-black font-inter font-medium">
              Perspective
            </span>
          </div>
          <div>
            <UploadButton
              label="Upload a new Funnel"
              bgColor="#0076ff"
              size="text-xs"
              onFileUploadedCb={(funnel: Funnel) => {
                set_Funnel(funnel);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 h-full p-4 mt-24">
        <>
          {funnel?.pages.map((p, i) => (
            <Page key={i} p={p as Page} />
          ))}
        </>
      </div>
    </>
  );
};

export default Preview;
