import { ReactNode } from "react";

export type DialogProps = {
  size?: "s" | "m" | "l";
  noOverlay?: boolean;
  isOpen?: boolean;
  children?: ReactNode;
};
