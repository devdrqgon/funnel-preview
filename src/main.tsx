import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "@fontsource-variable/inter";
import FunnelPicker from "./components/funnel-picker.tsx";
import funnel from "./temp-input.json";
import Preview from "./components/blocks/preview.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FunnelPicker />
    {/* <Preview funnel={funnel as Funnel} /> just for quick testing */}
  </React.StrictMode>
);
