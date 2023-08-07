import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "@fontsource-variable/inter";
import FunnelPicker from "./components/funnel-picker.tsx";
import funnel from "./temp-input.json";
import Preview from "./components/funnel-preview.tsx";
import Layout from "./components/layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
    {/* <Preview funnel={funnel as Funnel} /> */}
  </React.StrictMode>
);
