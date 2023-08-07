import React, { FC, useRef } from "react";
import Button from "./button";

interface Props {
  label: string;
  size?: "text-xs" | "text-xl";
  bgColor?: string;
  onFileUploadedCb: (funnel: Funnel) => void;
}
const UploadButton: FC<Props> = ({
  label,
  onFileUploadedCb,
  size,
  bgColor,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const parseFunnel = (event: ProgressEvent<FileReader>) => {
    if (event?.target?.result) {
      const funnel: Funnel = JSON.parse(event.target.result as string);
      if (!funnel.pages || !funnel.bgColor || !funnel.name) {
        alert(
          "Your funnel file schema seems to be invalid. Fix the issue and Try Again!"
        ); //simple quick-user-feedback solution when upload fails to not increase the scope further. For quick user-feedback, I usually use https://react-hot-toast.com/
      } else onFileUploadedCb(funnel);
    }
  };

  const onLoadFile = (file: File) => {
    // Create a new FileReader() object
    const reader = new FileReader();
    // Setup the callback event to run when the file is read
    reader.onload = parseFunnel;
    // Read the file
    reader.readAsText(file);
  };
  return (
    <>
      <div>
        <Button
          bgColor={bgColor || "#023047"}
          size={size}
          onClick={() => {
            fileInputRef?.current?.click(); //this triggers the onClick event of our hidden upload element
          }}
          text={label}
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
              onLoadFile(file);
            }
          }}
        />
      </div>
    </>
  );
};

export default UploadButton;
