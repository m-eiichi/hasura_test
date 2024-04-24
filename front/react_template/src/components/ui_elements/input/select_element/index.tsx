import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { SelectElementProps, OptionProps } from "./types";
import Styles from "./select_element.module.css";

export const SelectElement = <T extends FieldValues>(
  props: SelectElementProps<T>,
): ReactElement => {
  const {
    size,
    fullWidth,
    id,
    options,
    register,
    errors,
    disabled,
    name,
    defaultvalue,
    handleChange,
  } = props;

  const select = [
    Styles.select,
    errors != null ? Styles.error : "",
    size === undefined ? Styles.l : Styles[size],
    fullWidth === true ? Styles.full_width : "",
    disabled === true ? Styles.disabled : "",
  ];
  return (
    <select
      className={select.join(" ")}
      id={id}
      name={name}
      disabled={disabled}
      defaultValue={defaultvalue}
      {...register}
      onChange={(e) => {
        // register
        register?.onChange(e);

        // props分
        if (handleChange) {
          if (typeof handleChange === "function") {
            handleChange(e);
          } else {
            handleChange.forEach((change_event) => change_event(e));
          }
        }
      }}
    >
      {options &&
        options.map((optinon: OptionProps) => {
          return (
            <option key={optinon.value} value={optinon.value}>
              {optinon.text}
            </option>
          );
        })}
    </select>
  );
};
