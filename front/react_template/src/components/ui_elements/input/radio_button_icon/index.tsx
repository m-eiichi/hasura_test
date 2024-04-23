import { type ReactElement } from "react";
import { RadioButtonIconProps } from "./types";

import Styles from "./radio_button_icon.module.css";

export const RadioButtonIcon = (props: RadioButtonIconProps): ReactElement => {
  const { id, name, value, status, checked, register } = props;
  const icon = [Styles.icon, status === undefined ? "" : Styles[status]];
  return (
    <>
      <input
        className={Styles.input}
        type="radio"
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
