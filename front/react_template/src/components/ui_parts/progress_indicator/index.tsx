import { type ReactElement } from "react";

import { ProgressIndicatorProps } from "./types";
import Styles from "./progress_indicator.module.css";

export const ProgressIndicator = (props: ProgressIndicatorProps): ReactElement => {
  const { label, shape = "spinner", inline = false, overlay = false } = props;

  const container = [Styles.container, inline === true ? Styles.inline : Styles.stacked, overlay === true ? Styles.overlay : ""];
  const loader = shape === "spinner" ? Styles.spinner : Styles.liner;

  return (
    <div className={container.join(" ")}>
      <div className={loader}></div>
      <p className={Styles.label}>{label}</p>
    </div>
  );
};
