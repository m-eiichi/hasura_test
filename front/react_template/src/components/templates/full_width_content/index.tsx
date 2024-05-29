import { type ReactElement } from "react";

import { PropsType } from "./types";
import Styles from "./full_width_content.module.css";

export const FullWidthContent = (props: PropsType): ReactElement => {
  return <div className={Styles.full_width_content}>{props.children}</div>;
};
