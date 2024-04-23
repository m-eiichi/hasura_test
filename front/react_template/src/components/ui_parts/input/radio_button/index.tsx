import { type ReactElement } from "react";
import { RadioButtonProps } from "./types";

import Styles from "./radio_button.module.css";
import { RadioButtonIcon } from "@/components/ui_elements/input/radio_button_icon";

export const RadioButton = (props: RadioButtonProps): ReactElement => {
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

  // const radio_button = [Styles.radio_button, tile === true ? Styles.tile : ""];
  const radio_button = [
    Styles.radio_button,
    size === undefined ? Styles.l : Styles[size],
    disabled === true ? Styles.disabled : error ? Styles.error : "",
    tile === true ? Styles.tile : "",
  ];

  return (
    <div className={radio_button.join(" ")}>
      <RadioButtonIcon
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
