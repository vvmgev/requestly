// @ts-nocheck
import React from "react";
import { DesktopNetworkLog } from "./types";
import { ResourceTable, ResourceTableProps } from "./ResourceTable";
import { useRegisterLogNetworkRequestEvent } from "./hooks";
import { desktopNetworkTableColumns } from "./colums";

interface DesktopNetworkTableProps<T> extends ResourceTableProps<DesktopNetworkLog> {
  harEntrySelector: (log: T) => T;
}

export const DesktopNetworkTable: React.FC<DesktopNetworkTableProps<DesktopNetworkLog>> = () => {
  const { newLogs } = useRegisterLogNetworkRequestEvent();

  return (
    <div>
      <ResourceTable columns={desktopNetworkTableColumns} />
    </div>
  );
};
