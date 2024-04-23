import { type ReactElement } from "react";

import { ButtonProps } from "./types";
import Styles from "./button.module.css";

export const Button = (props: ButtonProps): ReactElement => {
  const { color, size, fullWidth, onClick, disabled, children } = props;
  const className = [
    Styles.button,
    color !== undefined ? Styles[`${color}`] : Styles.primary,
    size !== undefined ? Styles[`${size}`] : Styles.m,
    fullWidth === true ? Styles.full_width : "",
  ];

  return (
    <>
      {size == "s" || size == "xs" ? (
        <div className={Styles.button__wrap}>
          <button
            className={className.join(" ")}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </div>
      ) : (
        <button
          className={className.join(" ")}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};
