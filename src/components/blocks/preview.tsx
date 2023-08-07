import { useState, useEffect } from "react";
import funnel from "./../../temp-input.json";
import Page from "../page";
const Preview = () => {
  const [previewFile, set_previewFile] = useState(null);
  useEffect(() => {
    console.info("funnel", funnel);
  }, [funnel]);

  //   if (!previewFile) return <FilePicker />;
  return (
    <div
      className="flex flex-col h-screen items-center  "
      style={{ background: funnel?.bgColor || "#FFF" }}
    >
      {funnel.pages.map((p) => (
        <Page p={p as Page} />
      ))}
    </div>
  );
};

export default Preview;
