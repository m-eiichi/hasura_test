import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { TextAreaElement } from "@/components/ui_elements/input/textarea_element";
import { ErrorText } from "@/components/ui_elements/error_text";

import { TextAreaProps } from "./types";
import Styles from "./textarea.module.css";

export const TextArea = <T extends FieldValues>(
  props: TextAreaProps<T>,
): ReactElement => {
  const {
    id,
    size,
    errors,
    noErrorAreaFixed,
    label,
    requirement,
    supportText,
    rows,
    cols,
    register,
    readonly,
    disabled,
    fullWidth,
    fixed,
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
      <TextAreaElement
        size={size}
        id={id}
        register={register}
        errors={errors}
        readonly={readonly}
        disabled={disabled}
        rows={rows}
        cols={cols}
        fullWidth={fullWidth}
        fixed={fixed}
      />
      {noErrorAreaFixed !== true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </div>
  );
};
