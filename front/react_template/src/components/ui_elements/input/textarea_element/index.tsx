import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { TextAreaElementProps } from "./types";
import Styles from "./textarea_element.module.css";

export const TextAreaElement = <T extends FieldValues>(
  props: TextAreaElementProps<T>,
): ReactElement => {
  const {
    size,
    register,
    id,
    name,
    rows,
    cols,
    readonly,
    disabled,
    errors,
    placeholder,
    fixed,
    fullWidth,
  } = props;

  const textarea = [
    Styles.textarea,
    size === undefined ? Styles.l : Styles[size],
    errors !== undefined ? Styles.error : "",
    fullWidth === true ? Styles.full_width : "",
    disabled === true ? Styles.disabled : "",
    fixed === false ? "" : Styles.fixed,
  ];
  const placeHolder = !disabled ? placeholder : "";
  return (
    <textarea
      className={textarea.join(" ")}
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeHolder}
      readOnly={readonly}
      disabled={disabled}
      {...register}
    />
  );
};
