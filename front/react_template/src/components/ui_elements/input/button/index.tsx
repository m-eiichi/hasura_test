import { type ReactElement } from "react";

import { InputButtonProps } from "./types";
import Styles from "./input_button.module.css";

export const InputButton = (props: InputButtonProps): ReactElement => {
  const { id, type, value, color, size, disabled, fullWidth } = props;
  const className = [
    Styles.button,
    color !== undefined ? Styles[`${color}`] : Styles.primary,
    size !== undefined ? Styles[`${size}`] : Styles.m,
    fullWidth === true ? Styles.full_width : "",
  ];
  return (
    <input
      className={className.join(" ")}
      id={id}
      type={type == null ? "button" : type}
      value={value}
      disabled={disabled}
    />
  );
};
