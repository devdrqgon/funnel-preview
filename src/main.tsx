import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "@fontsource-variable/inter";
import Layout from "./components/layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
    {/* <Preview funnel={funnel as Funnel} /> */}
  </React.StrictMode>
);
