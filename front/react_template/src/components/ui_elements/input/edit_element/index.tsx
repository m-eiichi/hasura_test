import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { EditElementProps } from "./types";
import Styles from "./edit_element.module.css";

export const EditElement = <T extends FieldValues>(
  props: EditElementProps<T>,
): ReactElement => {
  const {
    size,
    register,
    id,
    type,
    name,
    fullWidth,
    readonly,
    disabled,
    defaultvalue,
    errors,
    placeholder,
  } = props;

  const input = [
    type === "color"
      ? Styles.input_color
      : type === "file"
        ? Styles.input_file
        : type === "range"
          ? Styles.input_range
          : Styles.input,
    size === undefined ? Styles.l : Styles[size],
    errors !== undefined ? Styles.error : "",
    fullWidth === true ? Styles.full_width : "",
    disabled === true ? Styles.disabled : "",
  ];
  const placeHolder = !disabled ? placeholder : "";
  return (
    <input
      className={input.join(" ")}
      id={id}
      type={type === null ? "text" : type}
      name={name}
      placeholder={placeHolder}
      readOnly={readonly}
      disabled={disabled}
      defaultValue={defaultvalue}
      {...register}
    />
  );
};
