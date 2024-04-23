import { type ReactElement } from "react";

import { DividerProps } from "./types";
import Styles from "./divider.module.css";

export const Divider = ({ type = "fit", vMarginType = "contents", colorType = "text", weight = "s" }: DividerProps): ReactElement => {
  const className = [Styles.divider, Styles[type], Styles[vMarginType], Styles[colorType], Styles[weight]];
  return <hr className={className.join(" ")} />;
};
