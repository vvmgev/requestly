import React from "react";
import { DesktopNetworkLog, HAREntry } from "./types";
import { ResourceTableProps } from "./ResourceTable";

interface DesktopNetworkTableProps<T> extends ResourceTableProps<DesktopNetworkLog> {
  harEntrySelector: (log: T) => HAREntry;
}

export const DesktopNetworkTable: React.FC<DesktopNetworkTableProps<DesktopNetworkLog>> = () => {
  return <div>{/* <ResourceTable /> */}</div>;
};
