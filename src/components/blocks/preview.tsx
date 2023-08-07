import { useEffect, useState } from "react";
import funnel from "./../../temp-input.json";
import Page from "../page";
import FunnelPicker from "../funnel-picker";
const Preview = () => {
  // const [previewFile, set_previewFile] = useState(null);
  const [funnelIsLoaded] = useState(true);

  useEffect(() => {
    console.info("funnel", funnel);
  }, []);

  if (!funnelIsLoaded) return <FunnelPicker />;

  //Set Body BackgroundColor based on the funnel backgroundColor
  useEffect(() => {
    document.body.style.backgroundColor = funnel?.bgColor || "#FFF";
  }, []);
  return (
    <div className="flex flex-col items-center gap-8 h-full p-4">
      {funnel.pages.map((p) => (
        <Page p={p as Page} />
      ))}
    </div>
  );
};

export default Preview;
