import { useRef, useState } from "react";
import PerspectiveLogo from "./../assets/perspective-logo.png";
import Preview from "./funnel-preview";
import Button from "./common/button";
import { useFunnel } from "./hooks/useFunnel";

const FunnelPicker = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const set_Funnel = useFunnel((state) => state.setFunnel);
  const parseFunnel = (event: ProgressEvent<FileReader>) => {
    if (event?.target?.result) {
      const funnel: Funnel = JSON.parse(event.target.result as string);
      if (!funnel.pages || !funnel.bgColor || !funnel.name) {
        alert(
          "Your funnel file schema seems to be invalid. Fix the issue and Try Again!"
        ); //simple quick-user-feedback solution when upload fails to not increase the scope further. For quick user-feedback, I usually use https://react-hot-toast.com/
      } else set_Funnel(funnel);
    }
  };

  const handleFunnelUpload = (file: File) => {
    // Create a new FileReader() object
    const reader = new FileReader();
    // Setup the callback event to run when the file is read
    reader.onload = parseFunnel;
    // Read the file
    reader.readAsText(file);
  };

  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-center">
      <img
        className="rounded-2xl object-fit w-44 my-14 shadow-l animate-pulse-slow"
        src={PerspectiveLogo}
        alt="perspective-logo"
      />
      <Button
        text="Upload my funnel"
        bgColor="#0076ff"
        onClick={() => {
          fileInputRef?.current?.click(); //this triggers the onClick event of our hidden upload element
        }}
      />
      <input
        ref={fileInputRef}
        type={"file"}
        style={{ display: "none" }}
        multiple={false}
        accept={"application/JSON"}
        onInput={(e) => {
          e.preventDefault();
          const file = (e.target as HTMLInputElement)?.files?.[0];
          if (file) {
            handleFunnelUpload(file);
          }
        }}
      />
    </div>
  );
};

export default FunnelPicker;
