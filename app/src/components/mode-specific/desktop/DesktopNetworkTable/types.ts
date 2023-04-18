import { Entry as HAREntry } from "har-format";

export enum NetworkResourceType {
  FETCH = "fetch",
  XHR = "xhr",
  JS = "script",
  CSS = "stylesheet",
  IMG = "image",
  MEDIA = "media",
  FONT = "font",
  DOC = "document",
  WEBSOCKET = "websocket",
  WASM = "wasm",
  MANIFEST = "manifest",
  OTHER = "other",
}

export type Networklog = HAREntry & { _resourceType?: NetworkResourceType };

// applied rules info
export interface LogAction extends Record<string, unknown> {
  ruleId: string;
  ruleType?: string;
  // metadata?: {
  //   diff: unknown;
  // };
}

export interface DesktopNetworkLog extends Record<string, unknown> {
  id: string;
  data?: Networklog; // HAR entry
  actions: LogAction[];
}

export type DesktopNetworkLogEventType = "request_started" | "request_end" | "response_end";

export interface DesktopNetworkLogEvent {
  type: DesktopNetworkLogEventType;
  data: DesktopNetworkLog;
}

export interface ContextMenuItem extends Record<string, unknown> {
  key: string;
  label: string;
  onClick: (log: DesktopNetworkLog) => HAREntry;
}
