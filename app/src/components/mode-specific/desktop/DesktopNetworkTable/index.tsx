//@ts-nocheck
import React from "react";
import { DesktopNetworkLog, HAREntry } from "./types";
import { ResourceTableProps } from "./ResourceTable";
import { useRegisterLogNetworkRequestEvent } from "./hooks";

interface DesktopNetworkTableProps<T> extends ResourceTableProps<DesktopNetworkLog> {
  harEntrySelector: (log: T) => HAREntry;
}

export const DesktopNetworkTable: React.FC<DesktopNetworkTableProps<DesktopNetworkLog>> = () => {
  const { newLogs } = useRegisterLogNetworkRequestEvent();

  console.log({ newLogs });

  return <div>{/* <ResourceTable /> */}</div>;
};
