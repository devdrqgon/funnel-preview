import PerspectiveLogo from "./../assets/perspective-logo.png";
import { useFunnel } from "./hooks/useFunnel";
import UploadButton from "./common/upload-funnel-button";

const FunnelPicker = () => {
  const set_Funnel = useFunnel((state) => state.setFunnel);

  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-center">
      <img
        className="rounded-2xl object-fit w-44 my-14 shadow-l"
        src={PerspectiveLogo}
        alt="perspective-logo"
      />
      <UploadButton
        label="Upload a new Funnel"
        bgColor="#0076ff"
        size="text-xl"
        onFileUploadedCb={(funnel: Funnel) => {
          set_Funnel(funnel);
        }}
      />
    </div>
  );
};

export default FunnelPicker;
