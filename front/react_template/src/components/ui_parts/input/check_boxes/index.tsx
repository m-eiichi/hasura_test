import { type ReactElement } from "react";
import { FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { CheckBox } from "@/components/ui_parts/input/check_box";
import { ErrorText } from "@/components/ui_elements/error_text";

import { CheckBoxItemProps, CheckBoxesProps } from "./types";

import Styles from "./check_boxes.module.css";

export const CheckBoxes = <T extends FieldValues>(
  props: CheckBoxesProps<T>,
): ReactElement => {
  const {
    label,
    requirement,
    size,
    register,
    supportText,
    name,
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

  const checkbox_container = [
    Styles.checkbox_container,
    tile === true ? Styles.checkbox_container_tile : Styles.checkbox_container,
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
      <div className={checkbox_container.join(" ")}>
        {items &&
          items.map((item: CheckBoxItemProps) => {
            return (
              <CheckBox
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
