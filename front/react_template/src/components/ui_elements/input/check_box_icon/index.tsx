import { type ReactElement } from "react";
import { CheckBoxIconProps } from "./types";

import Styles from "./check_box_icon.module.css";

export const CheckBoxIcon = (props: CheckBoxIconProps): ReactElement => {
  const { id, name, value, status, checked, register } = props;
  const icon = [Styles.icon, status === undefined ? "" : Styles[status]];
  return (
    <>
      <input
        className={Styles.input}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        {...register}
      />
      <label className={icon.join(" ")} htmlFor={id}></label>
    </>
  );
};
