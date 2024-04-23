import { type ReactElement } from "react";

import { HeadlineProps } from "./types";
import Styles from "./headline.module.css";

export const Headline = ({
  as = "p",
  size,
  color,
  marginNone,
  children,
}: HeadlineProps): ReactElement => {
  const As = as;
  const className = [
    Styles.headline,
    size !== undefined ? Styles[`${size}`] : Styles.m,
    color !== undefined ? Styles[`${color}`] : Styles.black,
    marginNone === true ? Styles.margin_none : "",
  ];
  return <As className={className.join(" ")}>{children}</As>;
};
