import React from "react";
import { useFunnel } from "./hooks/useFunnel";
import FunnelPicker from "./funnel-picker";
import Preview from "./funnel-preview";

const Layout = () => {
  const funnel = useFunnel((state) => state.funnel);
  if (!funnel) return <FunnelPicker />;
  else return <Preview />;
};

export default Layout;
