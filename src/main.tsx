import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "@fontsource-variable/inter";
import Preview from "./components/blocks/preview.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Preview />
  </React.StrictMode>
);
