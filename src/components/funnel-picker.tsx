import PerspectiveLogo from "./../assets/perspective-logo.png";
import { useFunnel } from "./hooks/useFunnel";
import UploadButton from "./common/upload-funnel-button";
import mockFunnel from "./../temp-input.json";
const FunnelPicker = () => {
  const set_Funnel = useFunnel((state) => state.setFunnel);

  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-center">
      <img
        className="rounded-2xl object-fit w-44 my-14 shadow-l"
        src={PerspectiveLogo}
        alt="perspective-logo"
      />
      <div className="flex flex-col  gap-40 justify-center items-center">
        <UploadButton
          label="Upload a new Funnel"
          bgColor="#0076ff"
          size="text-xl"
          onFileUploadedCb={(funnel: Funnel) => {
            set_Funnel(funnel);
          }}
        />
        <span
          className=" animate-pulse-slow hover:shadow-l hover:font-bold font-semibold text-lg  font-inter shadow-sm   rounded-xl text-black py-4 px-3 text-center cursor-pointer"
          onClick={() => set_Funnel(mockFunnel as Funnel)}
        >
          No json file on hand? <br /> I got you.🌻 Click here to proceed with a
          pre-built sample Funnel🌈.
        </span>
      </div>
    </div>
  );
};

export default FunnelPicker;
