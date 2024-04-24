import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { SelectElement } from "@/components/ui_elements/input/select_element";
import { ErrorText } from "@/components/ui_elements/error_text";

import { SelectProps } from "./types";
import Styles from "./select.module.css";

export const Select = <T extends FieldValues>(
  props: SelectProps<T>,
): ReactElement => {
  const {
    size,
    label,
    requirement,
    disabled,
    supportText,
    id,
    options,
    register,
    errors,
    noErrorAreaFixed,
    fullWidth,
    name,
    defaultvalue,
  } = props;

  const container = [
    Styles.container,
    size === undefined ? Styles.l : Styles[size],
  ];

  return (
    <div className={container.join(" ")}>
      {(label || supportText || requirement) && (
        <div>
          <Label
            text={label}
            requirement={requirement}
            labelFor={id}
            disabled={disabled}
          />
          <SupportText disabled={disabled}>{supportText}</SupportText>
        </div>
      )}
      <SelectElement
        size={size}
        id={id}
        register={register}
        options={options}
        errors={errors}
        name={name}
        disabled={disabled}
        defaultvalue={defaultvalue}
        fullWidth={fullWidth}
      />
      {noErrorAreaFixed !== true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </div>
  );
};
