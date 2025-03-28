import React from "react";

export interface SectionItem {
  id: string;
  name: string;
  component: React.ComponentType;
}
export interface SectionComponentProps {
  isActive?: boolean;
  className?: string;
}
