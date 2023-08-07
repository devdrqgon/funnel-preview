import { FC, useEffect, useState } from "react";
import Page from "./page";
import PerspectiveLogo from "./../assets/perspective-logo.png";
import Button from "./common/button";
import { useFunnel } from "./hooks/useFunnel";
import UploadButton from "./common/upload-funnel-button";
import useDeviceInfo from "./hooks/useDeviceInfo";

const Preview: FC = () => {
  const funnel = useFunnel((state) => state.funnel);
  const set_Funnel = useFunnel((state) => state.setFunnel);
  const [isMobilePreviewMode, set_isMobilePreviewMode] = useState(false);
  const { isMobileDevice } = useDeviceInfo();

  //Set Body BackgroundColor based on the funnel backgroundColor
  useEffect(() => {
    document.body.style.backgroundColor = isMobilePreviewMode
      ? "#e9ecef"
      : funnel?.bgColor || "#FFF";
  }, [funnel?.bgColor, isMobilePreviewMode]);

  //  bg-[${isMobilePreviewMode ? "black" : funnel.bgColor}]

  return (
    <>
      {/* topbar */}
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
          <div className="flex gap-2">
            {!isMobileDevice && (
              <Button
                text={
                  !isMobilePreviewMode
                    ? "Activate Mobile View"
                    : "Exit Mobile View"
                }
                bgColor={!isMobilePreviewMode ? "green" : "red"}
                size="text-xs"
                onClick={() => {
                  set_isMobilePreviewMode(!isMobilePreviewMode);
                }}
              />
            )}

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
      {/* preview funnel */}
      <div
        style={{ backgroundColor: funnel.bgColor }}
        className={` 
                     ${isMobilePreviewMode ? "w-96 rounded-lg " : "w-fit"}
                     mt-28 flex flex-col items-center justify-center mx-auto  h-full gap-8 pb-8
        `}
      >
        <>
          {funnel?.pages.map((p, i) => (
            <Page key={i} page={p as Page} />
          ))}
        </>
      </div>
    </>
  );
};

export default Preview;
