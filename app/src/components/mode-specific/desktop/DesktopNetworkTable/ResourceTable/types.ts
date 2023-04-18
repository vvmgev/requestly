import { ReactNode } from "react";

export interface Column<ResourceType> {
  key: string;
  header: string;
  width?: number; // percentage
  render: (resource: ResourceType) => ReactNode;
}

export interface DetailsTab<ResourceType> {
  key: string;
  label: string;
  render: (resource: ResourceType) => ReactNode;
}

export interface ResourceTableProps<ResourceType> {
  resources: ResourceType[];
  columns: Column<ResourceType>[];

  /**
   * columns to show when details panel is opened
   */
  primaryColumnKeys?: string[];

  /**
   * if multiple tabs to show in details panel for a resource
   */
  detailsTabs?: DetailsTab<ResourceType>[];
  filter?: (resource: ResourceType) => boolean;

  /**
   * if returns true, the row will be marked failed
   */
  isFailed?: (resource: ResourceType) => boolean;
}
