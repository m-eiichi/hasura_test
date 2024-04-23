import { type ReactElement } from "react";

import { CheckBoxIcon } from "@/components/ui_elements/input/check_box_icon";
import { CheckBoxProps } from "./types";
import Styles from "./check_box.module.css";

export const CheckBox = (props: CheckBoxProps): ReactElement => {
  const {
    size,
    register,
    id,
    name, //radiobutton共通のname
    value,
    text,
    subText,
    checked,
    disabled,
    tile,
    error,
  } = props;

  const status = disabled === true ? "disabled" : error ? "error" : undefined;

  const check_box = [
    Styles.check_box,
    size === undefined ? Styles.l : Styles[size],
    disabled === true ? Styles.disabled : error ? Styles.error : "",
    tile === true ? Styles.tile : "",
  ];

  return (
    <div className={check_box.join(" ")}>
      <CheckBoxIcon
        id={id}
        name={name}
        value={value}
        status={status}
        checked={checked}
        register={register}
      />
      <label htmlFor={id}>
        <div className={Styles.label_in}>
          <span className={Styles.name}>{text}</span>
          {subText && <span className={Styles.sub_name}>{subText}</span>}
        </div>
      </label>
    </div>
  );
};
