import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type TextAreaProps<T extends FieldValues> = {
  id?: string;
  size?: "s" | "m" | "l";
  disabled?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  register?: UseFormRegisterReturn;
  name?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  readonly?: boolean;
  fullWidth?: boolean;
  fixed?: boolean;
};
