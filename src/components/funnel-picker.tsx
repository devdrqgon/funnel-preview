import PerspectiveLogo from "./../assets/perspective-logo.png";
const FunnelPicker = () => {
  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-center">
      <img
        className="rounded-2xl object-fit w-44 my-14 shadow-l animate-pulse-slow"
        src={PerspectiveLogo}
        alt="perspective-logo"
      />
      <button className="bg-[#007aff] text-xl font-semibold  font-inter shadow-sm  rounded-xl text-white py-4 px-8 text-center hover:bg-[#133DF6]  hover:transition-colors">
        Upload my funnel
      </button>
    </div>
  );
};

export default FunnelPicker;
