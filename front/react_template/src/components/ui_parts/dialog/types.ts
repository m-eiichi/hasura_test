import { ReactNode } from "react";

export type DialogProps = {
  size?: "s" | "m" | "l";
  noOverlay?: boolean;
  isOpen?: string;
  children?: ReactNode;
  dialogName: string;
};
