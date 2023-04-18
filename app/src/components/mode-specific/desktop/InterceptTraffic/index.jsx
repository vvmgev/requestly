import ProCard from "@ant-design/pro-card";
import React from "react";
import WebTraffic from "./WebTraffic";
import { DesktopNetworkTable } from "../DesktopNetworkTable";
import "./InterceptTraffic.css";

const InterceptTraffic = () => {
  return (
    <ProCard className="primary-card github-like-border web-traffic-pro-card">
      {/* <WebTraffic /> */}
      <DesktopNetworkTable />
    </ProCard>
  );
};

export default InterceptTraffic;
