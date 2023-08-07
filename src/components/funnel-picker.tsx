import { useRef, useState } from "react";
import PerspectiveLogo from "./../assets/perspective-logo.png";
import Preview from "./blocks/preview";

const FunnelPicker = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [funnel, set_funnel] = useState<Funnel | null>(null);
  function parseFunnel(event: ProgressEvent<FileReader>) {
    if (event?.target?.result) {
      const funnel: Funnel = JSON.parse(event.target.result as string);
      if (!funnel.pages || !funnel.bgColor || !funnel.name) {
        alert(
          "Your funnel file schema seems to be invalid. Fix the issue and Try Again!"
        ); //simple quick-user-feedback solution when upload fails to not increase the scope further. For quick user-feedback, I usually use https://react-hot-toast.com/
      } else set_funnel(funnel);
    }
  }

  // const onClosePreview = () => {
  //   set_funnel(null);
  // };

  const handleFunnelUpload = (file: File) => {
    // Create a new FileReader() object
    const reader = new FileReader();
    // Setup the callback event to run when the file is read
    reader.onload = parseFunnel;
    // Read the file
    reader.readAsText(file);
  };

  if (!funnel)
    return (
      <div className="w-full h-screen bg-[white] flex flex-col items-center justify-center">
        <img
          className="rounded-2xl object-fit w-44 my-14 shadow-l animate-pulse-slow"
          src={PerspectiveLogo}
          alt="perspective-logo"
        />
        <button
          onClick={() => {
            fileInputRef?.current?.click(); //this triggers the onClick event of our hidden upload element
          }}
          className="bg-[#007aff] text-xl font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]  hover:transition-colors"
        >
          Upload my funnel
        </button>
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

  return <Preview funnel={funnel} />;
};

export default FunnelPicker;
