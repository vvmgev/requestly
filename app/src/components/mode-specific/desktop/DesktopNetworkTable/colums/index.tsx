import { DesktopNetworkLog } from "../types";
import { Column } from "@requestly-ui/resource-table";
// import AppliedRules from "../../InterceptTraffic/WebTraffic/TrafficTableV2/Tables/columns/AppliedRules";

export enum DESKTOP_NETWORK_TABLE_COLUMN_IDS {
  TIME = "time",
  URL = "url",
  METHOD = "method",
  CONTENT_TYPE = "content_type",
  RULES_APPLIED = "rules_applied",
  STATUS = "status",
}

export const desktopNetworkTableColumns: Column<DesktopNetworkLog>[] = [
  {
    width: 6,
    header: "Time",
    key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.TIME,
    render: (desktopNetworkLog) => desktopNetworkLog.data.time,
  },
  {
    width: 54,
    header: "URL",
    key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.URL,
    render: (desktopNetworkLog) => desktopNetworkLog.data.request.url,
  },
  {
    width: 10,
    header: "Method",
    key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.METHOD,
    render: (desktopNetworkLog) => desktopNetworkLog.data.request.method,
  },
  {
    width: 10,
    header: "Content-Type",
    key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.CONTENT_TYPE,
    render: (desktopNetworkLog) => desktopNetworkLog.data.response.content.mimeType,
  },
  // {
  //   width: 10,
  //   header: "Rules applied",
  //   key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.RULES_APPLIED,
  //   // TODO: refactor "AppliedRules" component
  //   render: (desktopNetworkLog) => <AppliedRules actions={desktopNetworkLog.actions} />,
  // },
  {
    width: 10,
    header: "Status",
    key: DESKTOP_NETWORK_TABLE_COLUMN_IDS.STATUS,
    render: (desktopNetworkLog) => desktopNetworkLog.data.response.status,
  },
];
