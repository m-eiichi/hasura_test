import { type ReactElement } from "react";

import { LabelProps } from "./types";
import Styles from "./label.module.css";

export const Label = (props: LabelProps): ReactElement => {
  const { labelFor, text, requirement, disabled } = props;
  const label = [Styles.label, disabled === true ? Styles.disabled : ""];
  return (
    <>
      {(text !== undefined || requirement === true) && (
        <label className={label.join(" ")} htmlFor={labelFor}>
          {text && <span className={Styles.label_text}>{text}</span>}
          {requirement && !disabled && <span className={Styles.requirement}>※</span>}
        </label>
      )}
    </>
  );
};
