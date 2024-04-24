import { ReactElement } from "react";
import { FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { RadioButton } from "@/components/ui_parts/input/radio_button";
import { ErrorText } from "@/components/ui_elements/error_text";

import { RadioButtonItemProps, RadioButtonsProps } from "./types";

import Styles from "./radio_buttons.module.css";

export const RadioButtons = <T extends FieldValues>(
  props: RadioButtonsProps<T>,
): ReactElement => {
  const {
    label,
    requirement,
    size,
    supportText,
    name,
    register,
    items,
    tile,
    vertical,
    disabled,
    errors,
    noErrorAreaFixed,
  } = props;

  const container = [
    Styles.container,
    size === undefined ? Styles.l : Styles[size],
  ];

  const radiobox_container = [
    Styles.radiobox_container,
    tile === true ? Styles.tile_container : Styles.no_tile_container,
    vertical === true ? Styles.vertical : "",
  ];

  return (
    <div className={container.join(" ")}>
      {(label || supportText || requirement) && (
        <div>
          <Label text={label} requirement={requirement} disabled={disabled} />
          <SupportText disabled={disabled}>{supportText}</SupportText>
        </div>
      )}
      <div className={radiobox_container.join(" ")}>
        {items &&
          items.map((item: RadioButtonItemProps) => {
            return (
              <RadioButton
                key={item.id}
                size={size}
                id={item.id}
                name={name}
                register={register}
                value={item.value}
                text={item.text}
                subText={item.subText}
                checked={item.checked}
                disabled={disabled || item.disabled}
                tile={tile}
                error={errors && true}
              />
            );
          })}
      </div>
      {noErrorAreaFixed !== true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </div>
  );
};
