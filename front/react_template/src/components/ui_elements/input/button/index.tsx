import { type ReactElement } from "react";

import { InputButtonProps } from "./types";
import Styles from "./input_button.module.css";

export const InputButton = (props: InputButtonProps): ReactElement => {
  const { id, type, value, color, size, fullWidth, disabled } = props;
  const button = [
    Styles.button,
    color !== undefined ? Styles[`${color}`] : Styles.primary,
    size !== undefined ? Styles[`${size}`] : Styles.m,
    fullWidth === true ? Styles.full_width : "",
  ];
  return (
    <>
      {size == "s" || size == "xs" ? (
        <div className={Styles.button__wrap}>
          <input
            className={button.join(" ")}
            id={id}
            type={type == null ? "button" : type}
            value={value}
            disabled={disabled}
          />
        </div>
      ) : (
        <input
          className={button.join(" ")}
          id={id}
          type={type == null ? "button" : type}
          value={value}
          disabled={disabled}
        />
      )}
    </>
  );
};
